import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBm8vOWuUBs_QnCDIqSB1_YVKqUFJkaZY0",
  authDomain: "multimart-d0a8e.firebaseapp.com",
  projectId: "multimart-d0a8e",
  storageBucket: "multimart-d0a8e.appspot.com",
  messagingSenderId: "747325809729",
  appId: "1:747325809729:web:4b73f27f07a4036e4fd2c0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;