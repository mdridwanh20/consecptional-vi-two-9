
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdusUFsMGz6sc4v2ccOGj-m13JjFaZysQ",
  authDomain: "conceptional-video-two.firebaseapp.com",
  projectId: "conceptional-video-two",
  storageBucket: "conceptional-video-two.firebasestorage.app",
  messagingSenderId: "934229078718",
  appId: "1:934229078718:web:c5907cb827b809575d64ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);