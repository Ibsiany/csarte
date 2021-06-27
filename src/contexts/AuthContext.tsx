import { createContext, ReactNode, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { firebase, auth } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  sigInWithGoogle: () => Promise<void>;
};

type AuthContextProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderType) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          return toast.error("Você precisa estar logado");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsuscribe();
    };
  }, []);

  async function sigInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider)

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, sigInWithGoogle }}>
      <Toaster position="top-center" reverseOrder={false} />
      {props.children}
    </AuthContext.Provider>
  );
}