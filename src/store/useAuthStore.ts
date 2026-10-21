import { create } from 'zustand';
import { User, Session } from '@supabase/supabase-js';
import { Database } from '../types/database';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Tenant = Database['public']['Tables']['tenants']['Row'];

interface AuthState {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  tenant: Tenant | null;
  isLoading: boolean;
  
  // Ações
  setAuth: (user: User | null, session: Session | null) => void;
  setProfileAndTenant: (profile: Profile | null, tenant: Tenant | null) => void;
  setLoading: (loading: boolean) => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  profile: null,
  tenant: null,
  isLoading: true,

  setAuth: (user, session) => set({ user, session }),
  setProfileAndTenant: (profile, tenant) => set({ profile, tenant }),
  setLoading: (isLoading) => set({ isLoading }),
  resetAuth: () => set({
    user: null,
    session: null,
    profile: null,
    tenant: null,
    isLoading: false,
  }),
}));