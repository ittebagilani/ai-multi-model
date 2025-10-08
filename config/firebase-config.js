// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-multi-model-74625.firebaseapp.com",
  projectId: "ai-multi-model-74625",
  storageBucket: "ai-multi-model-74625.firebasestorage.app",
  messagingSenderId: "528078151767",
  appId: "1:528078151767:web:7d2164a040e13e47168312",
  measurementId: "G-2ZXCV2BKQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
