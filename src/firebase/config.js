// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxXXsp658BJZyWbUEp4ABz8Jct9ER1qf8',
  authDomain: 'react-cursos-b3c08.firebaseapp.com',
  projectId: 'react-cursos-b3c08',
  storageBucket: 'react-cursos-b3c08.appspot.com',
  messagingSenderId: '433820922600',
  appId: '1:433820922600:web:050a135d0c533014014f5d',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
