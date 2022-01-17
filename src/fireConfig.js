import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvKeH9_GQPuzoFcZfkQuE2dOAIjVwHRRc",
  authDomain: "webstore-f26f5.firebaseapp.com",
  projectId: "webstore-f26f5",
  storageBucket: "webstore-f26f5.appspot.com",
  messagingSenderId: "448488537511",
  appId: "1:448488537511:web:bce7b5e05ba0c0af9f0a82",
  measurementId: "G-Z1NH77SMR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB