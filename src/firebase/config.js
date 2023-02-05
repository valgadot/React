// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDpz3LP2FLi9nJxGsrDjADqd56w8-wxBM",
  authDomain: "bruja-blanca-4bcd0.firebaseapp.com",
  projectId: "bruja-blanca-4bcd0",
  storageBucket: "bruja-blanca-4bcd0.appspot.com",
  messagingSenderId: "644653876550",
  appId: "1:644653876550:web:28f31cd47be6aadc991147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);