import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFO39i3WkIBBGiRBoMjge6qXlGYnkqxaE",
  authDomain: "fb222-c91f1.firebaseapp.com",
  databaseURL: "https://fb222-c91f1.firebaseio.com",
  projectId: "fb222-c91f1",
  storageBucket: "fb222-c91f1.appspot.com",
  messagingSenderId: "771157418166",
  appId: "1:771157418166:web:e48e56eb120d73e7dc4617",
  measurementId: "G-81KSV3B8NS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
