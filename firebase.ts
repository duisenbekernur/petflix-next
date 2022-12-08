// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-vhsukSONPi_RaxnmE0pclehbj7EnB0",
  authDomain: "netflix-b7dcb.firebaseapp.com",
  projectId: "netflix-b7dcb",
  storageBucket: "netflix-b7dcb.appspot.com",
  messagingSenderId: "131057232935",
  appId: "1:131057232935:web:b9a7c81f88eae21330f202",
  measurementId: "G-R5PP5MJQND",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
