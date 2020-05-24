import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCZJI1ZG_oYUfvk_xLn1s9jWgUITeUQTUY",
    authDomain: "mrpostel-front.firebaseapp.com",
    databaseURL: "https://mrpostel-front.firebaseio.com",
    projectId: "mrpostel-front",
    storageBucket: "mrpostel-front.appspot.com",
    messagingSenderId: "1012521978561",
    appId: "1:1012521978561:web:d40e840b0759b4a51c2240",
    //measurementId: "G-05MT486Z8N",  
  };

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const fs = firebase.storage();

const fa = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { fb, db, fs, fa, providerGoogle, providerFacebook };