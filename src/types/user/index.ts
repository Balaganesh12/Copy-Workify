export interface SupabaseUser {
  id: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_image?: string;
  phone_number?: string;
  is_onboarded?: boolean;
}
