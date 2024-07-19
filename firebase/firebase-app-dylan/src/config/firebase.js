import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, WEB_CLIENT_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAc1TM9kULsz1lEC6kIkZLJymW-odUIe8",
  authDomain: "practica-firebase-20220537.firebaseapp.com",
  projectId: "practica-firebase-20220537",
  storageBucket: "practica-firebase-20220537.appspot.com",
  messagingSenderId: "749174743638",
  appId: "1:749174743638:web:11ab8255e27783bba4d1f7"
};

console.log("Valor de configuracion", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('Storage initialized correctly');
} else {
  console.log('Storage initialization failed');
}

// Initialize Firebase Auth and configure Google Sign-In
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID, // Reemplaza con tu webClientId de la consola de Firebase
});

const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
    return auth.signInWithCredential(googleCredential);
  } catch (error) {
    console.error(error);
  }
};

export { database, storage, auth, googleProvider, signInWithGoogle };
