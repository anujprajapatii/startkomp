# Supabase Setup Guide — Startkomp

## Step 1 — Supabase Account banao

1. Jao: https://supabase.com
2. "Start your project" click karo
3. GitHub se sign in karo
4. "New project" → name: `startkomp` → region: **Singapore** (India ke sabse paas)
5. Database password save karo

---

## Step 2 — Schema run karo

1. Supabase Dashboard → **SQL Editor** → **New Query**
2. `supabase/schema.sql` ka pura content paste karo
3. **Run** click karo
4. ✅ Success message aana chahiye

---

## Step 3 — Auth providers setup karo

### Google OAuth
1. Supabase → **Authentication** → **Providers** → Google → Enable
2. Google Cloud Console → APIs → Credentials → OAuth 2.0 Client
3. Authorized redirect URIs mein add karo:
   ```
   https://your-project.supabase.co/auth/v1/callback
   ```
4. Client ID aur Secret Supabase mein paste karo

### GitHub OAuth
1. GitHub → Settings → Developer Settings → OAuth Apps → New OAuth App
2. Homepage URL: `http://localhost:3000`
3. Callback URL: `https://your-project.supabase.co/auth/v1/callback`
4. Client ID aur Secret Supabase mein paste karo

---

## Step 4 — Environment variables set karo

`.env.local` file banao (root mein):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Values milenge: **Supabase Dashboard → Settings → API**

---

## Step 5 — Run karo

```bash
npm install
npm run dev
```

---

## Database Tables

| Table | Description |
|-------|-------------|
| `profiles` | User profiles (auto-created on signup) |
| `startups` | All startup listings |
| `upvotes` | Startup upvotes |
| `saves` | Saved/bookmarked startups |
| `startup_views` | View analytics |
| `follows` | Founder follows |
| `categories` | Startup categories |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/startups` | GET | List startups with filters |
| `/api/startups` | POST | Submit new startup |
| `/api/upvotes` | POST | Toggle upvote |
| `/api/saves` | POST | Toggle save |
| `/api/profile` | GET | Get profile |
| `/api/profile` | PATCH | Update profile |
| `/api/auth/callback` | GET | OAuth callback |

## RLS Policies

- ✅ Public startups — sabko dikhte hain
- ✅ Own startup — founder hi edit kar sakta hai
- ✅ Upvotes/Saves — sirf logged-in users
- ✅ Profile — apna profile sirf aap update kar sako
