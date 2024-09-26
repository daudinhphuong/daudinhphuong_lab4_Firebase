import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyASS_Iewz5mQ3h7SSErHtrHKKO1Pb1OQ9E",
  authDomain: "lab4-cf9ec.firebaseapp.com",
  projectId: "lab4-cf9ec",
  storageBucket: "lab4-cf9ec.appspot.com",
  messagingSenderId: "720119911671",
  appId: "1:720119911671:web:33e45e347669e3a299eff2",
  measurementId: "G-TTS92CJHQD"
};

export const FIREBASE_APP=initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);

