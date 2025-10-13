
// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACZJJuUrkPGjSoJVN2rMHjhqMvi4WaQtc",
  authDomain: "mywebsite-958cb.firebaseapp.com",
  projectId: "mywebsite-958cb",
  storageBucket: "mywebsite-958cb.firebasestorage.app",
  messagingSenderId: "248073349237",
  appId: "1:248073349237:web:f2c705850227d3c112303c",
  measurementId: "G-3B69X9EWBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
// Initialize Firestore and EXPORT it for other files to use
export const db = getFirestore(app);