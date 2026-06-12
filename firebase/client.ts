// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import{  getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAftfdC41exhg3T533c-tAP6VhYdFWrSJ0",
    authDomain: "prepwise-f4658.firebaseapp.com",
    projectId: "prepwise-f4658",
    storageBucket: "prepwise-f4658.firebasestorage.app",
    messagingSenderId: "149678332961",
    appId: "1:149678332961:web:a960e8ca9d77325b7dd760",
    measurementId: "G-MBDW8H3CED"
};

// Initialize Firebase
const app =  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)