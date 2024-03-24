// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDzWd-vABxa_lgGPnxth7uIM761pdmum0A",
//   authDomain: "radiant-bites.firebaseapp.com",
//   projectId: "radiant-bites",
//   storageBucket: "radiant-bites.appspot.com",
//   messagingSenderId: "836898773260",
//   appId: "1:836898773260:web:4a6e1bab4bf5b0e1001129",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app