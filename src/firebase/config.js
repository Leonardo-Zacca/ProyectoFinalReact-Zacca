// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TO DO :Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Configuración de aplicación web de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvZkmigAbDzTZBUxTvfU00rDFzrgMhTps",
  authDomain: "fila3d.firebaseapp.com",
  projectId: "fila3d",
  storageBucket: "fila3d.appspot.com",
  messagingSenderId: "192204305126",
  appId: "1:192204305126:web:3402ab9cdd512262050127"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);