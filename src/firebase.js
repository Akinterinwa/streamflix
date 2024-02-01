import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBRvSY3PDWW_uLuZCKAYwIFzX6VqCv6mYc",
    authDomain: "movie-app-8b343.firebaseapp.com",
    projectId: "movie-app-8b343",
    storageBucket: "movie-app-8b343.appspot.com",
    messagingSenderId: "683484411122",
    appId: "1:683484411122:web:d1c3661e031c875e398c6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
