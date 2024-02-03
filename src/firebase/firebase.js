import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkw7oDeTg_rp0-ZFlT5whLGJrSE8IiQ_Y",
  authDomain: "filmyverse-007.firebaseapp.com",
  projectId: "filmyverse-007",
  storageBucket: "filmyverse-007.appspot.com",
  messagingSenderId: "844119576433",
  appId: "1:844119576433:web:00e174703e3f44bae730d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkw7oDeTg_rp0-ZFlT5whLGJrSE8IiQ_Y",
  authDomain: "filmyverse-007.firebaseapp.com",
  projectId: "filmyverse-007",
  storageBucket: "filmyverse-007.appspot.com",
  messagingSenderId: "844119576433",
  appId: "1:844119576433:web:00e174703e3f44bae730d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

