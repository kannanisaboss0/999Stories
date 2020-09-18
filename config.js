import firebase from 'firebase'

require('@firebase/firestore')


    var firebaseConfig = {
        apiKey: "AIzaSyAbyb8OQ6oekVt6ywJXxiGqn7P3Ay-Aa60",
        authDomain: "stories-firestore.firebaseapp.com",
        databaseURL: "https://stories-firestore.firebaseio.com",
        projectId: "stories-firestore",
        storageBucket: "stories-firestore.appspot.com",
        messagingSenderId: "1052601204356",
        appId: "1:1052601204356:web:fc9d12d9adf2c8aeb88cd1",
        measurementId: "G-DM2PCELD2R"
      }
      firebase.initializeApp(firebaseConfig);
      export default firebase.firestore();