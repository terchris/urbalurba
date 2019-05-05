import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

var fire = firebase.initializeApp({
    apiKey: "AIzaSyAxd0v4vx_JUh1N7q9z96ceq6wPoLFrCGk",
    authDomain: "urbalurbacore.firebaseapp.com",
    databaseURL: "https://urbalurbacore.firebaseio.com",
    projectId: "urbalurbacore",
    storageBucket: "urbalurbacore.appspot.com",
    messagingSenderId: "546821540083"
});

export default fire;
