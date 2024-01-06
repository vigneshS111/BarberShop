import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXnX4CfGfPcDBA3iMzrDsjwjH71fO7gkw",
  authDomain: "barbershop-932e0.firebaseapp.com",
  projectId: "barbershop-932e0",
  storageBucket: "barbershop-932e0.appspot.com",
  messagingSenderId: "1082756509119",
  appId: "1:1082756509119:web:6aa86a2973677827aec50a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
export { app, auth, firestore,provider };