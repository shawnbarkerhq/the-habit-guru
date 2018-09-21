import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//Reducers
import notifyReducer from './reducers/notifyReducer';

var firebaseConfig = {
  apiKey: 'AIzaSyCpYEYPyaxD_o6SeNem1zsQ91H2tW13KUA',
  authDomain: 'the-habit-guru.firebaseapp.com',
  databaseURL: 'https://the-habit-guru.firebaseio.com',
  projectId: 'the-habit-guru',
  storageBucket: 'the-habit-guru.appspot.com',
  messagingSenderId: '1028231518882'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: null,
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // attachAuthIsReady: true, // attaches auth is ready promise to store
  // firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init Firestore
const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer
});

//Create initial state
const initialState = {};

//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
