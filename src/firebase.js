import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCgUI9jcOqKjeI4u3ET5GLS6OwcowkYTXQ",
    authDomain: "dukaan-21d9f.firebaseapp.com",
    projectId: "dukaan-21d9f",
    storageBucket: "dukaan-21d9f.appspot.com",
    messagingSenderId: "587679129082",
    appId: "1:587679129082:web:11e692dac2cd80a73dd843"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb