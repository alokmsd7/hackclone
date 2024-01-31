// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBebJAZwyAKw9fR2wzX8U4Ak29q7eBWB8",
  authDomain: "hacker-c88de.firebaseapp.com",
  projectId: "hacker-c88de",
  storageBucket: "hacker-c88de.appspot.com",
  messagingSenderId: "369695476831",
  appId: "1:369695476831:web:76e3eb929fae370d6c5fea",
  measurementId: "G-3Q4YMYBP9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;