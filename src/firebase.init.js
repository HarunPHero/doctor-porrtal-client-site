// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
  apiKey: "AIzaSyCNlcvQdMZ-pjAgOuk_SvOMUJgSMMpse1Y",

  authDomain: "doctors-portal-739.firebaseapp.com",

  projectId: "doctors-portal-739",

  storageBucket: "doctors-portal-739.appspot.com",

  messagingSenderId: "1073287645821",

  appId: "1:1073287645821:web:cc54404c9aafa0073b3f14",

  measurementId: "G-ZBJY8LZWB6"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
