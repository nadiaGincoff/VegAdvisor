import firebase from 'firebase/app'

const firebaseConfig = {
  
    apiKey: "AIzaSyBDqgZSNkDAQCartcMwcKKCBDL6NcyLesU",
    authDomain: "vegadvisor-dd3e3.firebaseapp.com",
    databaseURL: "https://vegadvisor-dd3e3.firebaseio.com",
    projectId: "vegadvisor-dd3e3",
    storageBucket: "vegadvisor-dd3e3.appspot.com",
    messagingSenderId: "240872138444",
    appId: "1:240872138444:web:5d2a867471844747e98469"

}

export const firebaseApp = firebase.initializeApp(firebaseConfig);