// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDkmeKdMpfUEy-CP0XSGsjn8FaE70aOgdw',
  authDomain: 'truscape-2fe9e.firebaseapp.com',
  projectId: 'truscape-2fe9e',
  storageBucket: 'truscape-2fe9e.appspot.com',
  messagingSenderId: '133436218016',
  appId: '1:133436218016:web:f864d188fe127d3dcd87c5',
  measurementId: 'G-S3Z6182EGC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
