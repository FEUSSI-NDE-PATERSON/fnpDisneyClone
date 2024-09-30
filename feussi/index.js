// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
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


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });