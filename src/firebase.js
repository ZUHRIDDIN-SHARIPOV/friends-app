import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAV7QaAYyP0a9dj7AkQgnIzaTEo3_vxjik",
  authDomain: "my-classmates-141d8.firebaseapp.com",
  projectId: "my-classmates-141d8",
  storageBucket: "my-classmates-141d8.appspot.com",
  messagingSenderId: "886006151433",
  appId: "1:886006151433:web:a1e0bd4290ec609c8a7bd8",
});

const auth = app.auth();
export { auth };
export default app;
