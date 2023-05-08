// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS-NUcAW1AHE7sc9CqSNbGkBDcVOmaz2g",
  authDomain: "psm-b41d6.firebaseapp.com",
  projectId: "psm-b41d6",
  storageBucket: "psm-b41d6.appspot.com",
  messagingSenderId: "790822444642",
  appId: "1:790822444642:web:644d9eac91019bab14bb3b",
  measurementId: "G-TF6BNXDWWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase()
export const firestore = getFirestore(app);
// exporting db
export const db = getFirestore(app);

const addDocument = () => { 
  const collectionId = "my-collection";
  const documentId = "my-document";
  const value = { versionUsed: "V9" }; 
  setDoc(doc(db, collectionId, documentId), value); 
}
