import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDwRYmvaaoK1_YHIPMLPty1sLyy8iUgnVM",
  authDomain: "story-hub-26c63.firebaseapp.com",
  databaseURL: "https://story-hub-26c63.firebaseio.com",
  projectId: "story-hub-26c63",
  storageBucket: "story-hub-26c63.appspot.com",
  messagingSenderId: "15466289847",
  appId: "1:15466289847:web:c71d63ab736ab313dfcb32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

