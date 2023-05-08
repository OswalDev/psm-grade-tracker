import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";


const App = () => {

const [subjectList, setSubjectList] = useState([]);
const subjectCollectionRef = collection(db, "subjects");

const getSubjectList = async () => {
  try {
    const data = await getDocs(subjectCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setSubjectList(filteredData);
  } catch (err) {
    console.error(err);
    console.log(subjectList)
  }
};

useEffect(() => {
  getSubjectList();
}, []);


  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
