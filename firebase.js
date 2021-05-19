import firebase from 'firebase';
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyC0-tF9PF-NKjEcw7_XjfOXQu0FbvmdB24",
    authDomain: "fbclone-6b674.firebaseapp.com",
    projectId: "fbclone-6b674",
    storageBucket: "fbclone-6b674.appspot.com",
    messagingSenderId: "673563197793",
    appId: "1:673563197793:web:79e23ff944092150040520"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };