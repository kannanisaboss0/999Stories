import firebase from 'firebase'

require("@firebase/firestore")


var firebaseConfig = {
  apiKey: "AIzaSyCn4MdN4oxUgZ77h5SFtZwuDmYy4eUYSHM",
  authDomain: "stories-7185b.firebaseapp.com",
  projectId: "stories-7185b",
  storageBucket: "stories-7185b.appspot.com",
  messagingSenderId: "258659002746",
  appId: "1:258659002746:web:d7b80e446206e17b0b4ec3",
  measurementId: "G-6DSP43T9ER"
};
      firebase.initializeApp(firebaseConfig);
      firebase.analytics()
      export default firebase.firestore();