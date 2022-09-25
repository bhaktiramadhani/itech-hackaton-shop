import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9IWoSMj9wU8uimIAW4xpSe0RcRovnFEA",
  authDomain: "lomba-itech-shop.firebaseapp.com",
  projectId: "lomba-itech-shop",
  storageBucket: "lomba-itech-shop.appspot.com",
  messagingSenderId: "1065223099389",
  appId: "1:1065223099389:web:3c507651a6c53cdfb2ff94",
  measurementId: "G-95MR6CJLJ2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
