// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWrL_iW-e5GCiiMBDhmy60OY5ekVfXOh8",
  authDomain: "yousuf-assignment9.firebaseapp.com",
  projectId: "yousuf-assignment9",
  storageBucket: "yousuf-assignment9.appspot.com",
  messagingSenderId: "1046618362395",
  appId: "1:1046618362395:web:7f2c74734dc34717ed1ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;