import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnWc-0WyverWxMBi88Tv-jCgark184e_I",
  authDomain: "portfolio-dddc8.firebaseapp.com",
  projectId: "portfolio-dddc8",
  storageBucket: "portfolio-dddc8.appspot.com",
  messagingSenderId: "842747823893",
  appId: "1:842747823893:web:220bbfa42e9e0ed78a8b1c",
  measurementId: "G-WEGL6GE1T0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();