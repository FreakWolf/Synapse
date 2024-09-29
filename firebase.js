import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCbsBNXdlzTRN5-hFiuNpu7djM1mOaBWw",
  authDomain: "synapse-firewolf.firebaseapp.com",
  projectId: "synapse-firewolf",
  storageBucket: "synapse-firewolf.appspot.com",
  messagingSenderId: "643460758058",
  appId: "1:643460758058:web:2ac13dbc61fd3b13ac2153",
  measurementId: "G-WBWJ9XHW72",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
