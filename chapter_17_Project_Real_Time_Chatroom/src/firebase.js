import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAatekgVrBm9D_EbYUFlkv9nn9OOmZ3ACE',
  authDomain: 'udemy-modern-javascript-273bb.firebaseapp.com',
  projectId: 'udemy-modern-javascript-273bb',
  storageBucket: 'udemy-modern-javascript-273bb.appspot.com',
  messagingSenderId: '764386409334',
  appId: '1:764386409334:web:4206a7925b84e3680dd857',
  measurementId: 'G-YP84GLZRF4',
};

//init firebase app
initializeApp(firebaseConfig);

//init services
export const db = getFirestore();
