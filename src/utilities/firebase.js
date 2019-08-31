import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FIRE_BASE_CONFIG } from './keys.secret';
import { StyledFirebaseAuth } from 'react-firebaseui';

// keys.secret.js contains sensitive information, you should add it into .gitignore

firebase.initializeApp(FIRE_BASE_CONFIG);
const firestore = firebase.firestore();

const FIREBASE_UI_CONFIG = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

const firebaseInitialized = () => {
  return firebase.apps.length ? true : false;
}

export { firebase, firestore, FIREBASE_UI_CONFIG, StyledFirebaseAuth, firebaseInitialized };