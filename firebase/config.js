import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxXdjWdz9qKYatR6obNI451KJgKBRorj0",
  authDomain: "sistema-malharia-bloren.firebaseapp.com",
  projectId: "sistema-malharia-bloren",
  storageBucket: "sistema-malharia-bloren.appspot.com",
  messagingSenderId: "631847397577",
  appId: "1:631847397577:web:9ee8c5b5249a43ee72aa8",
  measurementId: "G-WNQYKK4LZ2" // opcional, pode remover se não for usar Analytics
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
