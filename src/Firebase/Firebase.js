import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDkB0elwtx2-p_iH9k4xItj_PRBFv3-MGg",
  authDomain: "reactauthapp-8516e.firebaseapp.com",
  projectId: "reactauthapp-8516e",
  storageBucket: "reactauthapp-8516e.appspot.com", 
  messagingSenderId: "859723219520",
  appId: "1:859723219520:web:302d8de1d8977ab04715a5",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth }; 
