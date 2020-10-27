import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBa_uJYehU-AdRud-4ardOUE_UrCsOlO78",
  authDomain: "vue-ecommerce-2573c.firebaseapp.com",
  databaseURL: "https://vue-ecommerce-2573c.firebaseio.com",
  projectId: "vue-ecommerce-2573c",
  storageBucket: "vue-ecommerce-2573c.appspot.com",
  messagingSenderId: "737140277166",
  appId: "1:737140277166:web:12d38a7cb3adf42709d23f",
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
