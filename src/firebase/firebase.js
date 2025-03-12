import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIJ8274RUFJy7ZqFUckkmgKeMTo9ShCmw",
  authDomain: "umai-restaurant.firebaseapp.com",
  projectId: "umai-restaurant",
  storageBucket: "umai-restaurant.appspot.com",
  messagingSenderId: "855720050316",
  appId: "1:855720050316:web:c80d5021377698a5c5c5a9",
};

const app = initializeApp(firebaseConfig);

export default app;
