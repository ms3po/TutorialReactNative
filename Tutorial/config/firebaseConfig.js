// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth , getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-DxYgPWdBMG_05Ky2MqqW23m1ObaSM6o",
  authDomain: "reactnativetutorial-a9367.firebaseapp.com",
  projectId: "reactnativetutorial-a9367",
  storageBucket: "reactnativetutorial-a9367.firebasestorage.app",
  messagingSenderId: "129434979993",
  appId: "1:129434979993:web:a210e093f46c07daa5b208",
  measurementId: "G-T1Y4KB7Q4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
}) ;
export const db = getFirestore(app);
const analytics = getAnalytics(app);