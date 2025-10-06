// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC220p0xdegF1rzxFqBGsE3-8aqUd1dpgk",
  authDomain: "netflixds-523c9.firebaseapp.com",
  projectId: "netflixds-523c9",
  storageBucket: "netflixds-523c9.firebasestorage.app",
  messagingSenderId: "419022387795",
  appId: "1:419022387795:web:0a54d38b13be2f9f63a4a6",
  measurementId: "G-48CQLLRSL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();