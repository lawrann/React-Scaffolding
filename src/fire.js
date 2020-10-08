import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG2KodAW9krx8TTGFT8k__H5UdOzObR-k",
  authDomain: "poc-auth-8ef43.firebaseapp.com",
  databaseURL: "https://poc-auth-8ef43.firebaseio.com",
  projectId: "poc-auth-8ef43",
  storageBucket: "poc-auth-8ef43.appspot.com",
  messagingSenderId: "376904021821",
  appId: "1:376904021821:web:5c205ce0c45c734c103754",
};

var fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
export default fire;
