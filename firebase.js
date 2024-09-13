// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6hKeCRGCDlv0KnqwTMuyHXiaPasZcnB8",
  authDomain: "newsfrontend-next.firebaseapp.com",
  projectId: "newsfrontend-next",
  // storageBucket: "newsfrontend-next.appspot.com",
  messagingSenderId: "228661545563",
  appId: "1:228661545563:web:15dccb0a31c10752ae8d7e",
  measurementId: "G-LH7R3S3EHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
