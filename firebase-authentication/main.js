
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
require('dotenv').config();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
console.log(firebaseConfig);
console.log(process.env.PROJECT_ID);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(auth);

const btnCreate = document.getElementById("create");
btnCreate.onclick = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('pass').value;
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
