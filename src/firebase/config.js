import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS5Dv4ozW6px8v5W8fOqGGN_QGyckFJpk",
  authDomain: "urbanthreadsstore-cfb77.firebaseapp.com",
  projectId: "urbanthreadsstore-cfb77",
  storageBucket: "urbanthreadsstore-cfb77.firebasestorage.app",
  messagingSenderId: "896458761026",
  appId: "1:896458761026:web:7ee55fb35980a0da381edb",
  measurementId: "G-LVQLBSR03H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
