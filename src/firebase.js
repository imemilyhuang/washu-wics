// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "@firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwtC6hMyqAZjJw3cgnGgS3ncK19QLPYTo",
  authDomain: "washu-wics.firebaseapp.com",
  projectId: "washu-wics",
  storageBucket: "washu-wics.appspot.com",
  messagingSenderId: "287793294790",
  appId: "1:287793294790:web:94fadc6d83ea9e973756c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;