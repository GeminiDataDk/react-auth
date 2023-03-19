// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ibd7TuEWeyyGh2Fpb3rv92hZbq7MOug",
  authDomain: "react-auth-firebase-13e33.firebaseapp.com",
  projectId: "react-auth-firebase-13e33",
  storageBucket: "react-auth-firebase-13e33.appspot.com",
  messagingSenderId: "660973613477",
  appId: "1:660973613477:web:e07d1b0f4833273033784c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;