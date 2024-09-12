// Import the functions you need from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoIlCpKuFOnL2EMFgoRj3AbJiZIjIC6HU",
  authDomain: "indigo-cac5e.firebaseapp.com",
  projectId: "indigo-cac5e",
  storageBucket: "indigo-cac5e.appspot.com",
  messagingSenderId: "268003413318",
  appId: "1:268003413318:web:5361cb739ac03d37a7e947"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission and get token
export const requestForToken = (setTokenFound) => {
  return getToken(messaging, { vapidKey: 'c7954ff1ba7f28333069a3264dcc106bee3f0304' })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        return currentToken;
      } else {
        setTokenFound(false);
        return null;
      }
    })
    .catch((err) => {
      console.error('An error occurred while retrieving token. ', err);
      setTokenFound(false);
      return null;
    });
};

// Listener for incoming messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
