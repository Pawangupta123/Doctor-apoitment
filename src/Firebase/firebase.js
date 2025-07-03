import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const conf = {
  apiKey: "AIzaSyAp-CGVE_pnOV0razQ_mcIdPjSSCwkUhoM",
  authDomain: "doctor-app-174cc.firebaseapp.com",
  projectId: "doctor-app-174cc",
  storageBucket: "doctor-app-174cc.appspot.com",
  messagingSenderId: "399242634278",
  appId: "1:399242634278:web:c3cff6b7475c279cb0f2e7",
  measurementId: "G-FB177BB9YK",
  databaseURL: "https://doctor-app-174cc-default-rtdb.firebaseio.com" 
};

export const ap = initializeApp(conf);
// export const auth = getAuth(ap);
// export default ap;
export const db = getFirestore(ap);