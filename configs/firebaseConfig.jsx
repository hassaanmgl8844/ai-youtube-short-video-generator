// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-yt-short-video-generator.firebaseapp.com",
  projectId: "ai-yt-short-video-generator",
  storageBucket: "ai-yt-short-video-generator.firebasestorage.app",
  messagingSenderId: "860864273471",
  appId: "1:860864273471:web:5da2d0ebb2941f69b42c8a",
  measurementId: "G-VS174NKGK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
