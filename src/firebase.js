import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxWq3dIhfbNyZoPajWGSFVkGaN4T1vSSk",
  authDomain: "linkedin-clone-dc45a.firebaseapp.com",
  projectId: "linkedin-clone-dc45a",
  storageBucket: "linkedin-clone-dc45a.appspot.com",
  messagingSenderId: "691723712681",
  appId: "1:691723712681:web:5fec86be23763db16191b8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
