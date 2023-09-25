import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqKlNpm3qdqm1gTobRhJG-mV0nbbc-zvk",
  authDomain: "shah-portfolio-1617.firebaseapp.com",
  projectId: "shah-portfolio-1617",
  storageBucket: "shah-portfolio-1617.appspot.com",
  messagingSenderId: "391880354999",
  appId: "1:391880354999:web:de1968a731f07f6095f132"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();