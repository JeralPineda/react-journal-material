// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: 'AIzaSyAxXXsp658BJZyWbUEp4ABz8Jct9ER1qf8',
//   authDomain: 'react-cursos-b3c08.firebaseapp.com',
//   projectId: 'react-cursos-b3c08',
//   storageBucket: 'react-cursos-b3c08.appspot.com',
//   messagingSenderId: '433820922600',
//   appId: '1:433820922600:web:050a135d0c533014014f5d',
// };

//Testing
const firebaseConfig = {
  apiKey: 'AIzaSyDdcMpYr6xsRAtMubqot6z5oCvsvPBxJ-w',
  authDomain: 'redux-demo-database.firebaseapp.com',
  projectId: 'redux-demo-database',
  storageBucket: 'redux-demo-database.appspot.com',
  messagingSenderId: '556018416573',
  appId: '1:556018416573:web:97581f48b69375709870d4',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
