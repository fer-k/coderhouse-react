import firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1OmPINEWdbV92iHvCQyrUs0xtZ8P0s6o",
    authDomain: "appreactcoderhouse.firebaseapp.com",
    databaseURL: "https://appreactcoderhouse.firebaseio.com",
    projectId: "appreactcoderhouse",
    storageBucket: "appreactcoderhouse.appspot.com",
    messagingSenderId: "866182044274",
    appId: "1:866182044274:web:4d3e383da3a76dbca180eb",
    measurementId: "G-ZN8SD9HQLS"
  };

  const DB = firebase.initializeApp(firebaseConfig);

  export const GetDB = () => firebase.firestore(DB) 