import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBTxn9dCr5NQtdYrtpgB_a4OsDeM0INXOE",
  authDomain: "dashbay-2510.firebaseapp.com",
  projectId: "dashbay-2510",
  storageBucket: "dashbay-2510.appspot.com",
  messagingSenderId: "494589501793",
  appId: "1:494589501793:web:664572aeabd3af4e796520"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();