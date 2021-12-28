// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBaVMVNKQRNodL_YPeeqUcpXpBsJXBYIQ",
  authDomain: "voltea-la-pagina.firebaseapp.com",
  databaseURL: "https://voltea-la-pagina-default-rtdb.firebaseio.com",
  projectId: "voltea-la-pagina",
  storageBucket: "voltea-la-pagina.appspot.com",
  messagingSenderId: "476121793780",
  appId: "1:476121793780:web:f7f55db3f1c5defc750aa1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


