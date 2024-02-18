import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDTUzFN9fky_ZNhMsxVKXiMlUQe_MaO4ZM",
    authDomain: "server-dashboard-c7be2.firebaseapp.com",
    projectId: "server-dashboard-c7be2",
    storageBucket: "server-dashboard-c7be2.appspot.com",
    messagingSenderId: "37026691425",
    appId: "1:37026691425:web:5fdde3371355c0c12c6d20",
    measurementId: "G-F1XJHCRB0C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


// Set persistence to SESSION
setPersistence(auth, browserSessionPersistence);


export { app, auth, database };
