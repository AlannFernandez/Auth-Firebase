import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmaetryeHraO7SI8Uzzoq7jiMwe8Za4t0",
  authDomain: "login-react-b79c1.firebaseapp.com",
  projectId: "login-react-b79c1",
  storageBucket: "login-react-b79c1.appspot.com",
  messagingSenderId: "399083049348",
  appId: "1:399083049348:web:6e78e7760080f639fe4dd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
