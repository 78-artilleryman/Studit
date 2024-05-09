import { ReactNode, createContext, useState, useEffect } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@config/firebaseApp';
import { removeToken, saveToken } from '../utils/token';

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext({
  user: null as User | null,
});

export const AuthContextProvider = ({ children }: AuthProps) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        saveToken(user);
      } else {
        setCurrentUser(user);
        removeToken();
      }
    });
  }, [auth]);

  return <AuthContext.Provider value={{ user: currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
