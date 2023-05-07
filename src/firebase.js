import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import { getDatabase } from "firebase/database";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// require('dotenv').config({ path: "../.env.local" });
require('dotenv').config();

console.log("API KEY = " + process.env.REACT_APP_FIREBASE_API_KEY);
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL: "https://debeo-development-default-rtdb.firebaseio.com/"
})
/* temp changes to try auth emulator*/
export const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

export const database = getDatabase(app)
//export const auth = app.auth()

export default app
