import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuCJ55X03RFbbvXRmHu1BxiZKCT5B7BL0",
    authDomain: "social-media-clone-99c44.firebaseapp.com",
    projectId: "social-media-clone-99c44",
    storageBucket: "social-media-clone-99c44.appspot.com",
    messagingSenderId: "245840655439",
    appId: "1:245840655439:web:930638aeb1596c6a43e63a",
    measurementId: "G-QFYGK0TNCS"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db ;