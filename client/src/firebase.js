import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA6Ru5T88HHlR1SLvQkBLe9fwhnsKnOlOU",
  authDomain: "estate-78ac7.firebaseapp.com",
  projectId: "estate-78ac7",
  storageBucket: "estate-78ac7.appspot.com", // 🔁 FIXED the typo
  messagingSenderId: "235345612563",
  appId: "1:235345612563:web:a32451334aad37997954e6",
  measurementId: "G-09DZBWPH0N"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // ✅ ADD THIS

export { app, storage };
