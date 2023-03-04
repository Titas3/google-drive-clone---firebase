// import firebase from "firebase"
// import { firebase } from 'fire';
import firebase from 'firebase';
// import firebaseApp from 'firebase/firebaseApp';
// import 'firebase/db';
import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/provider';

const firebaseConfig = {
  apiKey: "AIzaSyCVjs_uXDoZt8IutJ_5vq4UOnimjEChzJU",
  authDomain: "drive-clone-de4ce.firebaseapp.com",
  projectId: "drive-clone-de4ce",
  storageBucket: "drive-clone-de4ce.appspot.com",
  messagingSenderId: "351213716399",
  appId: "1:351213716399:web:34fa09342e5f194b96e55a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider}