import React, { createContext, useContext, ReactNode } from 'react';
import { useSupabaseAuth } from './SupabaseAuthContext';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const supabaseAuth = useSupabaseAuth();

  return (
    <AuthContext.Provider value={supabaseAuth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
