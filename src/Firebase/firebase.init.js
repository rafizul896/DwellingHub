import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.local.VITE_APIKEY,
    authDomain: import.meta.env.local.VITE_AUTHDOMAIN,
    projectId: import.meta.env.local.VITE_PROJECTID,
    storageBucket: import.meta.env.local.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.local.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.local.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;