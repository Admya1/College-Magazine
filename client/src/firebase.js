// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "college-magazine-ae4b3.firebaseapp.com",
  projectId: "college-magazine-ae4b3",
  storageBucket: "college-magazine-ae4b3.appspot.com",
  messagingSenderId: "255467178672",
  appId: "1:255467178672:web:7293610db7b1aa89ee8975"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);