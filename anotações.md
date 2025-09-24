npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAZ0_PUQDlDGsphJHuBhReC5jihHLXNxkE",
authDomain: "meu-blog-poesia.firebaseapp.com",
projectId: "meu-blog-poesia",
storageBucket: "meu-blog-poesia.firebasestorage.app",
messagingSenderId: "968280071508",
appId: "1:968280071508:web:d0e9d4625e007977edfcc1",
measurementId: "G-VGFJHZXH1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
