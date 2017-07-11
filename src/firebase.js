import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyATNcpcrVMdMFBOEd_a7A6Rzf39ylZt6LM",
    authDomain: "goalcoach-94432.firebaseapp.com",
    databaseURL: "https://goalcoach-94432.firebaseio.com",
    projectId: "goalcoach-94432",
    storageBucket: "goalcoach-94432.appspot.com",
    messagingSenderId: "1090287305613"
  };
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp
