import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg3l8ogFyreHwvRy46jS36iewHFLw7I6g",
  authDomain: "gistshop-f3e7e.firebaseapp.com",
  databaseURL: "https://gistshop-f3e7e-default-rtdb.firebaseio.com",
  projectId: "gistshop-f3e7e",
  storageBucket: "gistshop-f3e7e.appspot.com",
  messagingSenderId: "533803420489",
  appId: "1:533803420489:web:509eb1fbd58a34eee46898"
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
