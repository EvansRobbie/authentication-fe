"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

interface contextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  error: string | null;
  // setError: React.Dispatch<React.SetStateAction<string | null>>,
}
const AuthContext = createContext<contextProps>({} as contextProps);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <AuthContext.Provider value={{ user, loading, error, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
