import firebase from "firebase";
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyChCny4_K36lp6KDmlsx3BPM3EqbPyBLFE",
    authDomain: "biblioteca-digital-julian.firebaseapp.com",
    projectId: "biblioteca-digital-julian",
    storageBucket: "biblioteca-digital-julian.appspot.com",
    messagingSenderId: "699115568602",
    appId: "1:699115568602:web:632e009150fad69c8754e3"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();