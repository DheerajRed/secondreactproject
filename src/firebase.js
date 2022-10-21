import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
const firebaseConfig = {
    apiKey: "AIzaSyBK2JWFmEFXxuilrGinCe2z_9rwg9dZaUo",
    authDomain: "myreactproject-31844.firebaseapp.com",
    databaseURL: "https://myreactproject-31844-default-rtdb.firebaseio.com",
    projectId: "myreactproject-31844",
    storageBucket: "myreactproject-31844.appspot.com",
    messagingSenderId: "709592886706",
    appId: "1:709592886706:web:2f8a9a781ec067f74748ab",
    measurementId: "G-5NN61V2XNC"
  };
  
  // Initialize Firebase
  const firebasedb = firebase.initializeApp(firebaseConfig);
  export default firebasedb.database().ref();