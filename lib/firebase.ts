import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ0_PUQDlDGsphJHuBhReC5jihHLXNxkE",
  authDomain: "meu-blog-poesia.firebaseapp.com",
  projectId: "meu-blog-poesia",
  storageBucket: "meu-blog-poesia.firebasestorage.app",
  messagingSenderId: "968280071508",
  appId: "1:968280071508:web:d0e9d4625e007977edfcc1",
  measurementId: "G-VGFJHZXH1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
