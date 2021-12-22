import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqdGcVD30I73DAcO4Q8SChLY1396pyWyo",
    authDomain: "projectfinal-85969.firebaseapp.com",
    projectId: "projectfinal-85969",
    storageBucket: "projectfinal-85969.appspot.com",
    messagingSenderId: "1090216754016",
    appId: "1:1090216754016:web:fb08dabea37dafc1a4fc05"
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