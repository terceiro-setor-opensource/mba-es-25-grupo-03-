import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

interface AuthContextProps {
  onAddAuth: () => Promise<void>;
  usuario: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

interface AuthProps {
  children: React.ReactNode;
}

export function AuthProvider({children}: AuthProps) {
  const [usuario, setUsuario] = useState<boolean>(false);

  const onAddAuth = useCallback((): Promise<void> => {
    setUsuario(true);
  }, []);

  const valueContext = useMemo(() => {
    return {
      onAddAuth,

      usuario,
    };
  }, [onAddAuth, usuario]);

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
