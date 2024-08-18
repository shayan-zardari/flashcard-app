// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8OjXmkh410LXsFgBX9nUuABIDxuCol4A",
  authDomain: "flashcardsaas-8a831.firebaseapp.com",
  projectId: "flashcardsaas-8a831",
  storageBucket: "flashcardsaas-8a831.appspot.com",
  messagingSenderId: "105652849122",
  appId: "1:105652849122:web:164447cc302948019e51bb",
  measurementId: "G-J5FWCGEHR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const db = getFirestore(app)

export {db}