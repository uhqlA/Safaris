// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage} from "firebase/storage"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaapyNylWfrXPbPpDmsnJ82tVgXp7TPE4",
  authDomain: "safaris-5d898.firebaseapp.com",
  projectId: "safaris-5d898",
  storageBucket: "safaris-5d898.appspot.com",
  messagingSenderId: "309091563937",
  appId: "1:309091563937:web:7c00b772693cee853fb3e0",
  measurementId: "G-FJDWL226FR"
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)