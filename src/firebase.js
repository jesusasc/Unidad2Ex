//Este es el import de la libreria 
import firebase from "firebase/app";
//importar el servicio de la base de taos de firestore
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyNfi9vakYe_hFS2VyAQFmJOao9B4W8ro",
    authDomain: "proyectocrud-34597.firebaseapp.com",
    projectId: "proyectocrud-34597",
    storageBucket: "proyectocrud-34597.appspot.com",
    messagingSenderId: "124645518394",
    appId: "1:124645518394:web:3915ff6e27c99124085903"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export {firebase}
