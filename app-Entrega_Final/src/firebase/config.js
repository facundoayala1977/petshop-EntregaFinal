import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBrzt7SaiSfAW_AF0rz-Cg2LBkf6QBAR1k",
    authDomain: "mipetshop-fayala-react.firebaseapp.com",
    projectId: "mipetshop-fayala-react",
    storageBucket: "mipetshop-fayala-react.firebasestorage.app",
    messagingSenderId: "793656723386",
    appId: "1:793656723386:web:9d74f753f0d4f70f73ff83"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);