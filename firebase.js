import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0YVo621KHnzKWciY0lsYS5fLsBfsMnBE",
  authDomain: "clone-c6556.firebaseapp.com",
  projectId: "clone-c6556",
  storageBucket: "clone-c6556.appspot.com",
  messagingSenderId: "133549783168",
  appId: "1:133549783168:web:8f61aebd512962c1ce0e65"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;

