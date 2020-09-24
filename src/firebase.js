import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDglZxslrznWnI1WafoIDDwzJaqgbCKYWQ",
    authDomain: "whats-app-clone-3025b.firebaseapp.com",
    databaseURL: "https://whats-app-clone-3025b.firebaseio.com",
    projectId: "whats-app-clone-3025b",
    storageBucket: "whats-app-clone-3025b.appspot.com",
    messagingSenderId: "383973192348",
    appId: "1:383973192348:web:4643bf783c43fa8c47b359",
    measurementId: "G-F1H552V8NR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;