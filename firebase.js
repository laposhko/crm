import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyDkmeKdMpfUEy-CP0XSGsjn8FaE70aOgdw',
//   authDomain: 'truscape-2fe9e.firebaseapp.com',
//   projectId: 'truscape-2fe9e',
//   storageBucket: 'truscape-2fe9e.appspot.com',
//   messagingSenderId: '133436218016',
//   appId: '1:133436218016:web:f864d188fe127d3dcd87c5',
//   measurementId: 'G-S3Z6182EGC',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
