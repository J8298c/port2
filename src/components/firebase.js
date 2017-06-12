import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDcTdt7YBcyQ_izS-_b-6PhqTEIEjCHjFY",
    authDomain: "portfolio-e48d7.firebaseapp.com",
    databaseURL: "https://portfolio-e48d7.firebaseio.com",
    projectId: "portfolio-e48d7",
    storageBucket: "portfolio-e48d7.appspot.com",
    messagingSenderId: "863960277200"
  };

const firebaseApp = firebase.initializeApp(config);
const portfolioRefs = firebase.database().ref('projects');
const firebaseObject = {firebaseApp, portfolioRefs}
export default firebaseObject;