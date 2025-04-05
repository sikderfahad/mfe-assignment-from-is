import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD0Dnv9hRlok8b4IEh1vAvVzwBMD2e31Q",
  authDomain: "mfe-assignment-from-is.firebaseapp.com",
  projectId: "mfe-assignment-from-is",
  storageBucket: "mfe-assignment-from-is.firebasestorage.app",
  messagingSenderId: "688786011263",
  appId: "1:688786011263:web:618ae118942bddab9a7b4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
