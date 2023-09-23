// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhilrAkXwGwcdWDFfkV3OM3Q7efmy46fA",
    authDomain: "tweek-copy.firebaseapp.com",
    projectId: "tweek-copy",
    storageBucket: "tweek-copy.appspot.com",
    messagingSenderId: "964687166102",
    appId: "1:964687166102:web:a82f70b803344d3914a0b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);