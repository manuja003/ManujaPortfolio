// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWuVZiYCjTkgeqnrIemndaLAgxN51usV0",
  authDomain: "manuja-portfolio.firebaseapp.com",
  projectId: "manuja-portfolio",
  storageBucket: "manuja-portfolio.firebasestorage.app",
  messagingSenderId: "890009156163",
  appId: "1:890009156163:web:e0cf701ee417dab7d272f6",
  measurementId: "G-1W99WN1PKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };