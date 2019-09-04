import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FIRE_BASE_CONFIG } from './keys.secret'; // keys.secret.js contains sensitive information, you should add it into .gitignore
import { StyledFirebaseAuth } from 'react-firebaseui';

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

const FirebaseSignInButton = (props) => {
  const signInSuccessWithAuthResult = (result) => {
    props.onSignInSuccess();
  };

  const uiConfig = {
    ...FIREBASE_UI_CONFIG,
    callbacks: {
      signInSuccessWithAuthResult
    }
  }

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
}

export { firebase, firestore, FIREBASE_UI_CONFIG, FirebaseSignInButton, firebaseInitialized };