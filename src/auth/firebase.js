import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyACx_lCwQyfqJHlu7ebvLwtup2hXTOGlCk",
  authDomain: "friends-app-fe959.firebaseapp.com",
  projectId: "friends-app-fe959",
  storageBucket: "friends-app-fe959.appspot.com",
  messagingSenderId: "816040172077",
  appId: "1:816040172077:web:0f9e2ec862256b40d1b6a4",
});

export const auth = app.auth();
export const database = getAuth(app);
