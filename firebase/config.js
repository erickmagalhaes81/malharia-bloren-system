import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxXdjWdz9qKYatR6obNI451KJgKBRorj0",
  authDomain: "sistema-malharia-bloren.firebaseapp.com",
  projectId: "sistema-malharia-bloren",
  storageBucket: "sistema-malharia-bloren.firebasestorage.app",
  messagingSenderId: "631847379577",
  appId: "1:631847379577:web:e9ee8c5b5249a43ee72aa8",
  measurementId: "G-WNQYKXL4Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
