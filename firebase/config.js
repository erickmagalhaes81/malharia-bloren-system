import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0XjyWdz9gKYatR6obN14SIKJgBRorj0",
  authDomain: "sistema-malharia-bloren.firebaseapp.com",
  projectId: "sistema-malharia-bloren",
  storageBucket: "sistema-malharia-bloren.appspot.com",
  messagingSenderId: "631847379577",
  appId: "1:631847379577:web:9ee8c5b5249a43ee72aa8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
