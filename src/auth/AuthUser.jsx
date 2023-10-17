import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const authUserContext = createContext();

export const AuthUser = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <>
      <authUserContext.Provider value={{ user }}>
        {children}
      </authUserContext.Provider>
    </>
  );
};

export const useAuthUser = () => useContext(authUserContext);
