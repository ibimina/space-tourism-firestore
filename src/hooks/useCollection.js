import { useState, useEffect } from "react";

//firebase import real time data
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, p) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //   const q = useRef(p).current;

  useEffect(() => {
    setIsLoading(true);

    let ref = collection(db, c);

    if (p) {
      ref = query(ref, where(...p));
       console.log(ref);
    }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.empty) {
          setError("No documents found");
          setIsLoading(false);
        } else {
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });

          setData(result);
          setIsLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );

    return () => unsub();
  }, [c, p]);
  return { data, error, isLoading };
};
