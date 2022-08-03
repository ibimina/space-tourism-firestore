import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5-y6-a5cui8SxEYGwYKp_pfUjsuNGveU",
  authDomain: "space-tourism-87d06.firebaseapp.com",
  projectId: "space-tourism-87d06",
  storageBucket: "space-tourism-87d06.appspot.com",
  messagingSenderId: "740077160313",
  appId: "1:740077160313:web:7a38c5c99083c879b9d1a8",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
