import * as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDrs58EZPhVU_OwVDAIT1h8n3rv7Cakhw",
  authDomain: "nitroclik-blog.firebaseapp.com",
  databaseURL: "https://nitroclik-blog.firebaseio.com",
  projectId: "nitroclik-blog",
  storageBucket: "nitroclik-blog.appspot.com",
  messagingSenderId: "311406006133",
  appId: "1:311406006133:web:05ab4a08f7401f67"
};
firebase.initializeApp(config);
firebase.firestore()

export default firebase;