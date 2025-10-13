// src/services/firestore.js
import { db } from './firebase.js'; // <-- تأكد من وجود .js في النهاية
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

// دالة لإضافة تقييم جديد (موجودة سابقًا)
export const addFeedback = async (feedbackData) => {
  // ... (code from before)
};

// --- دالة جديدة لجلب كل المشاريع ---
export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const projects = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return projects;
};