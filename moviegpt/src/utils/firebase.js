// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpKY9J_pR2oIM6pRI93qQaeF5CBpJbtfA",
  authDomain: "moviegpt-585b9.firebaseapp.com",
  projectId: "moviegpt-585b9",
  storageBucket: "moviegpt-585b9.appspot.com",
  messagingSenderId: "1075135563505",
  appId: "1:1075135563505:web:ef86fb42c92597af018b50",
  measurementId: "G-8PXPMN4VZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();