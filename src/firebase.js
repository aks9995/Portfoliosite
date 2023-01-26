import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD3Kx-r6YoH7og3SomPsFzdBo71o4Lan0",
  authDomain: "anup-1st-react-portfolio.firebaseapp.com",
  projectId: "anup-1st-react-portfolio",
  storageBucket: "anup-1st-react-portfolio.appspot.com",
  messagingSenderId: "294014007910",
  appId: "1:294014007910:web:f2db3ae8bc4ffcd59a8ba7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()