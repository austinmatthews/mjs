import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

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
const db = getFirestore();

//collection ref
const colRef = collection(db, 'recipes');

//queries
const q = query(colRef, where('author', '==', 'austin'));

//get collection data anytime it updates
const unsub = onSnapshot(colRef, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(books);
});

//adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset();
  });
});

//deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const docRef = doc(db, 'recipes', deleteBookForm.id.value);
  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

const unsubButton = document.querySelector('.unsub');

unsubButton.addEventListener('click', () => {
  console.log('Unsubscribing');
  unsub();
});
