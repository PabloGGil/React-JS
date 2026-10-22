// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxqY2Ur_ZSQmPGHB9LY5fZNU_WfxWePc",
  authDomain: "carrito-22cb5.firebaseapp.com",
  projectId: "carrito-22cb5",
  storageBucket: "carrito-22cb5.firebasestorage.app",
  messagingSenderId: "159522447416",
  appId: "1:159522447416:web:930af10d6ab8d63e0f06cd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)