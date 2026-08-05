export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          full_name: string | null;
          bio: string | null;
          avatar_url: string | null;
          website: string | null;
          twitter_handle: string | null;
          location: string | null;
          verified: boolean;
          follower_count: number;
          following_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          full_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          website?: string | null;
          twitter_handle?: string | null;
          location?: string | null;
          verified?: boolean;
          follower_count?: number;
          following_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };

      startups: {
        Row: {
          id: string;
          slug: string;
          name: string;
          tagline: string | null;
          description: string;
          logo_emoji: string;
          logo_url: string | null;
          category: string;
          website_url: string | null;
          twitter_url: string | null;
          founder_id: string;
          access_type: "Early access" | "Beta" | "Live";
          status: "pending" | "approved" | "rejected";
          boosted: boolean;
          boost_expires_at: string | null;
          upvote_count: number;
          view_count: number;
          save_count: number;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          tagline?: string | null;
          description: string;
          logo_emoji?: string;
          logo_url?: string | null;
          category: string;
          website_url?: string | null;
          twitter_url?: string | null;
          founder_id: string;
          access_type?: "Early access" | "Beta" | "Live";
          status?: "pending" | "approved" | "rejected";
          boosted?: boolean;
          boost_expires_at?: string | null;
          upvote_count?: number;
          view_count?: number;
          save_count?: number;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["startups"]["Insert"]>;
      };

      upvotes: {
        Row: {
          id: string;
          startup_id: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          startup_id: string;
          user_id: string;
          created_at?: string;
        };
        Update: never;
      };

      saves: {
        Row: {
          id: string;
          startup_id: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          startup_id: string;
          user_id: string;
          created_at?: string;
        };
        Update: never;
      };

      startup_views: {
        Row: {
          id: string;
          startup_id: string;
          viewer_id: string | null;
          ip_hash: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          startup_id: string;
          viewer_id?: string | null;
          ip_hash?: string | null;
          created_at?: string;
        };
        Update: never;
      };

      follows: {
        Row: {
          id: string;
          follower_id: string;
          following_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          follower_id: string;
          following_id: string;
          created_at?: string;
        };
        Update: never;
      };

      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          emoji: string | null;
          startup_count: number;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          emoji?: string | null;
          startup_count?: number;
        };
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
      };
    };

    Views: {
      startups_with_founder: {
        Row: {
          id: string;
          slug: string;
          name: string;
          tagline: string | null;
          description: string;
          logo_emoji: string;
          category: string;
          website_url: string | null;
          access_type: string;
          status: string;
          boosted: boolean;
          upvote_count: number;
          view_count: number;
          save_count: number;
          featured: boolean;
          created_at: string;
          founder_id: string;
          founder_name: string | null;
          founder_username: string;
          founder_avatar: string | null;
          founder_verified: boolean;
        };
      };
    };

    Functions: {
      toggle_upvote: {
        Args: { p_startup_id: string; p_user_id: string };
        Returns: { upvoted: boolean; new_count: number };
      };
      toggle_save: {
        Args: { p_startup_id: string; p_user_id: string };
        Returns: { saved: boolean; new_count: number };
      };
      increment_view: {
        Args: { p_startup_id: string; p_viewer_id?: string; p_ip_hash?: string };
        Returns: void;
      };
      get_user_interactions: {
        Args: { p_startup_ids: string[]; p_user_id: string };
        Returns: { startup_id: string; upvoted: boolean; saved: boolean }[];
      };
    };
  };
}

// Convenience types
export type Profile   = Database["public"]["Tables"]["profiles"]["Row"];
export type Startup   = Database["public"]["Tables"]["startups"]["Row"];
export type Upvote    = Database["public"]["Tables"]["upvotes"]["Row"];
export type Save      = Database["public"]["Tables"]["saves"]["Row"];
export type Follow    = Database["public"]["Tables"]["follows"]["Row"];
export type Category  = Database["public"]["Tables"]["categories"]["Row"];
export type StartupWithFounder = Database["public"]["Views"]["startups_with_founder"]["Row"];

export type StartupInsert = Database["public"]["Tables"]["startups"]["Insert"];
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
export type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];
