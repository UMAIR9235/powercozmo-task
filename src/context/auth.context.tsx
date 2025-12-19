"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { getCurrentUser } from "@/services/auth.services";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  refreshAuth: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshAuth = async () => {
    setLoading(true);
    const user = await getCurrentUser();
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoading(true);
      const user = await getCurrentUser();
      if (mounted) {
        setUser(user);
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
