import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import {IUsuario} from '~/interfaces/IUsuario';
import {setToken, removeToken} from '~/utils';

interface AuthContextProps {
  onAddAuth: (usuario: IUsuario, acessToken: string) => Promise<void>;
  onLogout: () => Promise<void>;
  usuario: IUsuario;
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
  const [usuario, setUsuario] = useState<IUsuario>({} as IUsuario);

  const onAddAuth = useCallback(
    async (usuario: IUsuario, acessToken: string): Promise<void> => {
      setUsuario(usuario);

      await setToken(acessToken);
    },
    [],
  );

  const onLogout = useCallback(async (): Promise<void> => {
    await removeToken();
    setUsuario({} as IUsuario);
  }, []);

  const valueContext = useMemo(() => {
    return {
      onAddAuth,
      onLogout,
      usuario,
    };
  }, [onAddAuth, usuario, onLogout]);

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
