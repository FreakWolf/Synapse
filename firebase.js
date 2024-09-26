import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, getReactNativePersistence } from "firebase/auth";
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
const auth = getAuth(app);

const persistence = getReactNativePersistence(ReactNativeAsyncStorage);

auth.setPersistence(persistence);

const authConfig = {
  persistence: {
    async getItem(key) {
      const storageRef = storage.ref(key);
      try {
        const data = await storageRef.getDownloadURL();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    async setItem(key, value) {
      const storageRef = storage.ref(key);
      try {
        await storageRef.putString(value);
      } catch (error) {
        console.error(error);
      }
    },
    async removeItem(key) {
      const storageRef = storage.ref(key);
      try {
        await storageRef.delete();
      } catch (error) {
        console.error(error);
      }
    },
  },
};

export { auth };
