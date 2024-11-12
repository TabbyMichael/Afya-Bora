import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOVsLU51oCT98jALmCUe1ypTZ_jiz5lcg",
  authDomain: "afya-bora-3184f.firebaseapp.com",
  projectId: "afya-bora-3184f",
  storageBucket: "afya-bora-3184f.firebasestorage.app",
  messagingSenderId: "206634786830",
  appId: "1:206634786830:web:f1e2befdb6e5c745b15c5f",
  measurementId: "G-BY3P14N3T6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth }; 