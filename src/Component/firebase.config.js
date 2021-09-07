import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyALPOsm4VTGn2BbhKMOvlx_aR-xwzZVUrU",
    authDomain: "facebook-clone-8d075.firebaseapp.com",
    projectId: "facebook-clone-8d075",
    storageBucket: "facebook-clone-8d075.appspot.com",
    messagingSenderId: "422253664407",
    appId: "1:422253664407:web:fd8018ee20a8014efef1d2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

 
