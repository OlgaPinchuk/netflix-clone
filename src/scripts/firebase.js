// NPM packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBieP1tjYmoCvXKJYVM_SceP5Q0T3l-JYE",
  authDomain: "netflix-clone-59219.firebaseapp.com",
  projectId: "netflix-clone-59219",
  storageBucket: "netflix-clone-59219.appspot.com",
  messagingSenderId: "252120935749",
  appId: "1:252120935749:web:0aa9dc5a56a6390d18222c",
};

const firebaseInstance = initializeApp(firebaseConfig);
export const authInstance = getAuth(firebaseInstance);
export const fireStoreInstance = getFirestore(firebaseInstance);
export const storageInstance = getStorage(firebaseInstance);
