-- ================================================================
-- STARTKOMP — Complete Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm"; -- for full-text search

-- ================================================================
-- 1. PROFILES (extends Supabase auth.users)
-- ================================================================
create table public.profiles (
  id               uuid references auth.users(id) on delete cascade primary key,
  username         text unique not null,
  full_name        text,
  bio              text,
  avatar_url       text,
  website          text,
  twitter_handle   text,
  location         text,
  verified         boolean default false,
  follower_count   integer default 0,
  following_count  integer default 0,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- ================================================================
-- 2. CATEGORIES
-- ================================================================
create table public.categories (
  id             uuid default uuid_generate_v4() primary key,
  name           text unique not null,
  slug           text unique not null,
  emoji          text,
  startup_count  integer default 0
);

-- Seed categories
insert into public.categories (name, slug, emoji) values
  ('SaaS',                 'saas',                 '☁️'),
  ('AI Tools',             'ai-tools',             '🤖'),
  ('Fintech',              'fintech',              '💳'),
  ('Analytics',            'analytics',            '📊'),
  ('Developer Tools',      'developer-tools',      '⚙️'),
  ('E-Commerce',           'e-commerce',           '🛒'),
  ('EdTech',               'edtech',               '🎓'),
  ('HealthTech',           'healthtech',           '💊'),
  ('Workflow Automation',  'workflow-automation',  '🔀'),
  ('Productivity',         'productivity',         '⚡'),
  ('Legal',                'legal',                '⚖️'),
  ('Personal Finance',     'personal-finance',     '🧾');

-- ================================================================
-- 3. STARTUPS
-- ================================================================
create table public.startups (
  id               uuid default uuid_generate_v4() primary key,
  slug             text unique not null,
  name             text not null,
  tagline          text,
  description      text not null,
  logo_emoji       text default '🚀',
  logo_url         text,
  category         text not null references public.categories(name),
  website_url      text,
  twitter_url      text,
  founder_id       uuid not null references public.profiles(id) on delete cascade,
  access_type      text default 'Early access' check (access_type in ('Early access','Beta','Live')),
  status           text default 'pending' check (status in ('pending','approved','rejected')),
  boosted          boolean default false,
  boost_expires_at timestamptz,
  upvote_count     integer default 0,
  view_count       integer default 0,
  save_count       integer default 0,
  featured         boolean default false,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- Full text search index
create index startups_search_idx on public.startups
  using gin((
    setweight(to_tsvector('english', coalesce(name,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(tagline,'')), 'B') ||
    setweight(to_tsvector('english', coalesce(description,'')), 'C') ||
    setweight(to_tsvector('english', coalesce(category,'')), 'D')
  ));

create index startups_category_idx on public.startups(category);
create index startups_status_idx on public.startups(status);
create index startups_founder_idx on public.startups(founder_id);
create index startups_created_idx on public.startups(created_at desc);

-- ================================================================
-- 4. UPVOTES
-- ================================================================
create table public.upvotes (
  id          uuid default uuid_generate_v4() primary key,
  startup_id  uuid not null references public.startups(id) on delete cascade,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  created_at  timestamptz default now(),
  unique(startup_id, user_id)
);

create index upvotes_startup_idx on public.upvotes(startup_id);
create index upvotes_user_idx on public.upvotes(user_id);

-- ================================================================
-- 5. SAVES / BOOKMARKS
-- ================================================================
create table public.saves (
  id          uuid default uuid_generate_v4() primary key,
  startup_id  uuid not null references public.startups(id) on delete cascade,
  user_id     uuid not null references public.profiles(id) on delete cascade,
  created_at  timestamptz default now(),
  unique(startup_id, user_id)
);

-- ================================================================
-- 6. STARTUP VIEWS (analytics)
-- ================================================================
create table public.startup_views (
  id          uuid default uuid_generate_v4() primary key,
  startup_id  uuid not null references public.startups(id) on delete cascade,
  viewer_id   uuid references public.profiles(id) on delete set null,
  ip_hash     text,
  created_at  timestamptz default now()
);

create index views_startup_idx on public.startup_views(startup_id);
create index views_created_idx on public.startup_views(created_at desc);

-- ================================================================
-- 7. FOLLOWS
-- ================================================================
create table public.follows (
  id           uuid default uuid_generate_v4() primary key,
  follower_id  uuid not null references public.profiles(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at   timestamptz default now(),
  unique(follower_id, following_id),
  check(follower_id != following_id)
);

-- ================================================================
-- 8. VIEW — Startups with founder info
-- ================================================================
create view public.startups_with_founder as
  select
    s.*,
    p.full_name    as founder_name,
    p.username     as founder_username,
    p.avatar_url   as founder_avatar,
    p.verified     as founder_verified
  from public.startups s
  join public.profiles p on s.founder_id = p.id;

-- ================================================================
-- 9. FUNCTIONS
-- ================================================================

-- Toggle upvote (atomic)
create or replace function public.toggle_upvote(
  p_startup_id uuid,
  p_user_id    uuid
) returns json language plpgsql security definer as $$
declare
  v_exists   boolean;
  v_count    integer;
begin
  select exists(
    select 1 from public.upvotes
    where startup_id = p_startup_id and user_id = p_user_id
  ) into v_exists;

  if v_exists then
    delete from public.upvotes
    where startup_id = p_startup_id and user_id = p_user_id;

    update public.startups
    set upvote_count = greatest(0, upvote_count - 1),
        updated_at   = now()
    where id = p_startup_id
    returning upvote_count into v_count;
  else
    insert into public.upvotes(startup_id, user_id)
    values (p_startup_id, p_user_id)
    on conflict do nothing;

    update public.startups
    set upvote_count = upvote_count + 1,
        updated_at   = now()
    where id = p_startup_id
    returning upvote_count into v_count;
  end if;

  return json_build_object('upvoted', not v_exists, 'new_count', v_count);
end;
$$;

-- Toggle save
create or replace function public.toggle_save(
  p_startup_id uuid,
  p_user_id    uuid
) returns json language plpgsql security definer as $$
declare
  v_exists boolean;
  v_count  integer;
begin
  select exists(
    select 1 from public.saves
    where startup_id = p_startup_id and user_id = p_user_id
  ) into v_exists;

  if v_exists then
    delete from public.saves
    where startup_id = p_startup_id and user_id = p_user_id;
    update public.startups set save_count = greatest(0, save_count - 1) where id = p_startup_id returning save_count into v_count;
  else
    insert into public.saves(startup_id, user_id) values (p_startup_id, p_user_id) on conflict do nothing;
    update public.startups set save_count = save_count + 1 where id = p_startup_id returning save_count into v_count;
  end if;

  return json_build_object('saved', not v_exists, 'new_count', v_count);
end;
$$;

-- Increment view (deduplicated per session)
create or replace function public.increment_view(
  p_startup_id uuid,
  p_viewer_id  uuid  default null,
  p_ip_hash    text  default null
) returns void language plpgsql security definer as $$
begin
  -- Avoid duplicate views within 1 hour from same user/ip
  if not exists (
    select 1 from public.startup_views
    where startup_id = p_startup_id
      and created_at > now() - interval '1 hour'
      and (
        (p_viewer_id is not null and viewer_id = p_viewer_id) or
        (p_ip_hash   is not null and ip_hash   = p_ip_hash)
      )
  ) then
    insert into public.startup_views(startup_id, viewer_id, ip_hash)
    values (p_startup_id, p_viewer_id, p_ip_hash);

    update public.startups
    set view_count = view_count + 1, updated_at = now()
    where id = p_startup_id;
  end if;
end;
$$;

-- Get user interactions for multiple startups at once
create or replace function public.get_user_interactions(
  p_startup_ids uuid[],
  p_user_id     uuid
) returns table(startup_id uuid, upvoted boolean, saved boolean)
language sql security definer as $$
  select
    s.id as startup_id,
    exists(select 1 from public.upvotes u where u.startup_id = s.id and u.user_id = p_user_id) as upvoted,
    exists(select 1 from public.saves   v where v.startup_id = s.id and v.user_id = p_user_id) as saved
  from unnest(p_startup_ids) as s(id);
$$;

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger startups_updated_at before update on public.startups
  for each row execute function public.handle_updated_at();

create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.handle_updated_at();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
declare
  v_username text;
begin
  -- Generate username from email
  v_username := split_part(new.email, '@', 1);
  v_username := regexp_replace(v_username, '[^a-zA-Z0-9_]', '', 'g');

  -- Ensure uniqueness
  while exists(select 1 from public.profiles where username = v_username) loop
    v_username := v_username || floor(random() * 1000)::text;
  end loop;

  insert into public.profiles(id, username, full_name, avatar_url)
  values (
    new.id,
    v_username,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  );

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Update category counts
create or replace function public.update_category_count()
returns trigger language plpgsql as $$
begin
  if TG_OP = 'INSERT' and new.status = 'approved' then
    update public.categories set startup_count = startup_count + 1 where name = new.category;
  elsif TG_OP = 'DELETE' and old.status = 'approved' then
    update public.categories set startup_count = greatest(0, startup_count - 1) where name = old.category;
  elsif TG_OP = 'UPDATE' and old.status != 'approved' and new.status = 'approved' then
    update public.categories set startup_count = startup_count + 1 where name = new.category;
  end if;
  return coalesce(new, old);
end;
$$;

create trigger startups_category_count
  after insert or update or delete on public.startups
  for each row execute function public.update_category_count();

-- ================================================================
-- 10. ROW LEVEL SECURITY (RLS)
-- ================================================================

alter table public.profiles      enable row level security;
alter table public.startups      enable row level security;
alter table public.upvotes       enable row level security;
alter table public.saves         enable row level security;
alter table public.startup_views enable row level security;
alter table public.follows       enable row level security;

-- PROFILES
create policy "Public profiles viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- STARTUPS
create policy "Approved startups viewable by everyone"
  on public.startups for select
  using (status = 'approved' or auth.uid() = founder_id);

create policy "Authenticated users can submit startups"
  on public.startups for insert
  with check (auth.uid() = founder_id);

create policy "Founders can update own startups"
  on public.startups for update
  using (auth.uid() = founder_id);

-- UPVOTES
create policy "Upvotes viewable by everyone"
  on public.upvotes for select using (true);

create policy "Authenticated users can upvote"
  on public.upvotes for insert
  with check (auth.uid() = user_id);

create policy "Users can remove own upvotes"
  on public.upvotes for delete
  using (auth.uid() = user_id);

-- SAVES
create policy "Users can view own saves"
  on public.saves for select using (auth.uid() = user_id);

create policy "Authenticated users can save"
  on public.saves for insert
  with check (auth.uid() = user_id);

create policy "Users can remove own saves"
  on public.saves for delete
  using (auth.uid() = user_id);

-- VIEWS
create policy "Anyone can record views"
  on public.startup_views for insert with check (true);

create policy "Views visible to startup founders"
  on public.startup_views for select
  using (
    viewer_id = auth.uid() or
    exists(select 1 from public.startups s where s.id = startup_id and s.founder_id = auth.uid())
  );

-- FOLLOWS
create policy "Follows viewable by everyone"
  on public.follows for select using (true);

create policy "Authenticated users can follow"
  on public.follows for insert
  with check (auth.uid() = follower_id);

create policy "Users can unfollow"
  on public.follows for delete
  using (auth.uid() = follower_id);
