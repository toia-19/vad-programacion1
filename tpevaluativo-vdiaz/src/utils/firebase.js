import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA9Zdw_khrQVokAHfQZdte1IINd-fne-Ws",
    authDomain: "pp-cet30.firebaseapp.com",
    projectId: "pp-cet30",
    storageBucket: "pp-cet30.appspot.com",
    messagingSenderId: "395584495472",
    appId: "1:395584495472:web:d149b791a6dd06a3d379b5",
    measurementId: "G-K6YDDH6KG9"
};

const conexión = initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage(conexión);

const auth = getAuth();

export {db, storage, auth};