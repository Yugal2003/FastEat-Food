
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlmuH1_2gkLp9_dJCSUBUEhQxqeyG7QmE",
  authDomain: "fasteat-react.firebaseapp.com",
  projectId: "fasteat-react",
  storageBucket: "fasteat-react.appspot.com",
  messagingSenderId: "610978490040",
  appId: "1:610978490040:web:56c396c9186317637ab64d",
  measurementId: "G-9DWL7SQBTT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
