import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5J_-kM6S7StpBm0oJ3GntSoGlM0fL5WQ",
  authDomain: "gabbys-salsa.firebaseapp.com",
  projectId: "gabbys-salsa",
  storageBucket: "gabbys-salsa.appspot.com",
  messagingSenderId: "348552474417",
  appId: "1:348552474417:web:16f03ae461e6434ce2ca10",
  measurementId: "G-TQN1XWN2ZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
