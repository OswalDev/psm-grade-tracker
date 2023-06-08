// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSNuxGlFWsiiHrOWyEMC4bDwb1GK2nJ-g",
  authDomain: "s4nt14g0-m4r1n0.firebaseapp.com",
  projectId: "s4nt14g0-m4r1n0",
  storageBucket: "s4nt14g0-m4r1n0.appspot.com",
  messagingSenderId: "731133831472",
  appId: "1:731133831472:web:963b4df64b4b424ec240f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// export const fetchSubjects = async () => {
//   try {
//     const subjectsCollection = collection(db, "subjects");
//     const querySnapshot = await getDocs(subjectsCollection);
//     const subjects = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     return subjects;
//   } catch (error) {
//     console.log("Error fetching subjects:", error);
//     return [];
//   }
// };