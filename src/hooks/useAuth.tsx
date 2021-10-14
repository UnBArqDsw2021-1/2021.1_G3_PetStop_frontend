import React, { createContext, useState, useEffect, useContext } from "react";

type User = {
  name: string;
  email: string;
};

interface AuthContextProps {
  signedIn: boolean;
  user: User | null;
  signIn: (email: string, name: string) => void;
  signOut: () => void;
}

const AuthContext = createContext({
  signedIn: false,
} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getStoredData() {
      const _user = localStorage.getItem("@PetStop:user");

      if (_user) setUser(JSON.parse(_user));
    }

    getStoredData();
  }, []);

  async function signIn(email: string, password: string): Promise<void> {
    setUser({
      name: "Nome de Teste",
      email: "teste@teste.com",
    });

    localStorage.setItem("@PetStop:user", JSON.stringify(user));
  }

  async function signOut() {
    setUser(null);
    localStorage.removeItem("@PetStop:user");
  }

  return (
    <AuthContext.Provider
      value={{
        signedIn: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
