import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyAYPKQRcn3XVUEW4IbUpDGUuTOi_iNOLRE",
    databaseURL: "https://hnrtechchatapp.firebaseio.com",
    authDomain: "hnrtechchatapp.firebaseapp.com",
    projectId: "hnrtechchatapp",
    storageBucket: "hnrtechchatapp.appspot.com",
    messagingSenderId: "95235313469",
    appId: "1:95235313469:web:fa417e01da6ef8459c3f54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database()

