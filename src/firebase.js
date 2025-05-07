// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6M9trATN_rza6S_i8ppkKSHmU7TVCpsU",
  authDomain: "student-dashboard-9da00.firebaseapp.com",
  projectId: "student-dashboard-9da00",
  storageBucket: "student-dashboard-9da00.appspot.com",

  messagingSenderId: "447288226223",
  appId: "1:447288226223:web:bf81ccb90936a342bf3f5a",
  measurementId: "G-1WMPGRZX04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Auth
const auth = getAuth(app);

export { auth, analytics };
