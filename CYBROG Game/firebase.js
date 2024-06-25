// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUqanJbEIOCdcLsflR515GmlTTgrPCmU4",
  authDomain: "cybrog-game.firebaseapp.com",
  projectId: "cybrog-game",
  storageBucket: "cybrog-game.appspot.com",
  messagingSenderId: "532539306328",
  appId: "1:532539306328:web:2fe2569040689ecf3d352d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dp = getFirestore(app)
export const gamesInfo = collection(dp,'gamesInfo')