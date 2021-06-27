import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type IPhotos = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
};

type FirebaseFiles = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export function useFiles() {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<IPhotos[]>([]);

  useEffect(() => {
    const fileRef = database.ref(`home`);

    fileRef.on("value", (file) => {
      const data = file.val();

      const firebaseFiles: FirebaseFiles = data.files ?? {};

      const parsedFiles = Object.entries(firebaseFiles).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
        };
      });

      setPhotos(parsedFiles);
    });

    return () => {
      fileRef.off("value");
    };
  }, [user?.id]);

  return {photos};
}
