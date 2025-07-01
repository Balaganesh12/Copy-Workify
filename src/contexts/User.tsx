'use client';

import type { User } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react';

interface UserProfile {
  id: string;
  created_at: string;
  role_id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string;
  is_onboarded: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  resetUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
  children,
  user: initialUser,
  userProfile: initialUserProfile,
}: {
  children: React.ReactNode;
  user: User | null;
  userProfile: UserProfile | null;
}) => {
  const [user, setUser] = useState<User | null>(initialUser);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(
    initialUserProfile,
  );

  const resetUser = () => {
    setUser(null);
    setUserProfile(null);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, userProfile, setUserProfile, resetUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
