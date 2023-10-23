
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDLLF-d_RTLpcooi6IFW1UHq8hpnMRuCsA",
  authDomain: "rodolfoalexsandro513.firebaseapp.com",
  projectId: "rodolfoalexsandro513",
  storageBucket: "rodolfoalexsandro513.appspot.com",
  messagingSenderId: "808674051009",
  appId: "1:808674051009:web:f665e227831d80b1e4e540",
  measurementId: "G-G33TPN0HCL"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }
