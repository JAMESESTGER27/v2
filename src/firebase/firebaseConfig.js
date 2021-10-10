import firebase from "firebase";
import "firebase/auth"
const app = firebase.initializeApp ({
    apiKey: "AIzaSyCkGesF_eFHkxAfofW-17yqBVBljku7waM",
    authDomain: "login-64cba.firebaseapp.com",
    projectId: "login-64cba",
    storageBucket: "login-64cba.appspot.com",
    messagingSenderId: "959550635888",
    appId: "1:959550635888:web:52268641d9db4af07d99b5"
  });

  export const auth = app.auth();

  export default app;