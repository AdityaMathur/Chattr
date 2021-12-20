import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyhdHRIIjqd4zLFLIvJaU8v6UxR4MCFjo",
    authDomain: "signall-350ed.firebaseapp.com",
    projectId: "signall-350ed",
    storageBucket: "signall-350ed.appspot.com",
    messagingSenderId: "245646058101",
    appId: "1:245646058101:web:1462f0becbedaddddb0e3c"
  };
let app;
if(firebase.apps.length ===0){
    app=firebase.initializeApp(firebaseConfig)
}else{
    app=firebase.app();
}
 
const db= app.firestore();
const auth = firebase.auth();

export { db,auth};