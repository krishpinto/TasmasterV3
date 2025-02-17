// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQzArcUQBVKb6HvMXbEt9BREIFa7SLaO8",
  authDomain: "taskmaster-9f604.firebaseapp.com",
  projectId: "taskmaster-9f604",
  storageBucket: "taskmaster-9f604.firebasestorage.app",
  messagingSenderId: "345286836400",
  appId: "1:345286836400:web:afd85037b0937966b73b75",
  measurementId: "G-VN7EH4MVVM",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);
