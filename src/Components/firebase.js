import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDu8wVXG_is1txMQ2W0gDiaUTst8yD-G4",
    authDomain: "clone-80008.firebaseapp.com",
    projectId: "clone-80008",
    storageBucket: "clone-80008.appspot.com",
    messagingSenderId: "603672543812",
    appId: "1:603672543812:web:c6596dfbf32aac989df211",
    measurementId: "G-6048DLCRV1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };