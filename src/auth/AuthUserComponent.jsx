import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthUserContext = createContext();

export const AuthUserComponent = ({ children }) => {
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
      <AuthUserContext.Provider value={{ user }}>
        {children}
      </AuthUserContext.Provider>
    </>
  );
};

export const AuthUser = () => useContext(AuthUserContext);
