import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0xykjWd2g9kYatR6obnN145KJgBRorj0",
  authDomain: "sistema-malharia-bloren.firebaseapp.com",
  projectId: "sistema-malharia-bloren",
  storageBucket: "sistema-malharia-bloren.appspot.com",
  messagingSenderId: "631847397577",
  appId: "1:631847397577:web:9ee8c5b5249a43ee72aa8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
