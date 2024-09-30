// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHqUZGQUiy1fDswOCVIE6AEWb3VB6Y4gY",
  authDomain: "login-73e53.firebaseapp.com",
  projectId: "login-73e53",
  storageBucket: "login-73e53.appspot.com",
  messagingSenderId: "213097594545",
  appId: "1:213097594545:web:7b7ee82c664db4d7046c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()