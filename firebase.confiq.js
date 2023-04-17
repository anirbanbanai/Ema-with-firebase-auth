// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt9vRsOul0kAqbLmcxfBSibUvxJfukdXg",
  authDomain: "ema-with-firebase-auth.firebaseapp.com",
  projectId: "ema-with-firebase-auth",
  storageBucket: "ema-with-firebase-auth.appspot.com",
  messagingSenderId: "607221274937",
  appId: "1:607221274937:web:e6a1c7573e28e25ef3f0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}