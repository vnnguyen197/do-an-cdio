import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJzgUo0a3U9KuMCTRtWJcxb5cYUe_8KV4",
  authDomain: "login-61e87.firebaseapp.com",
  projectId: "login-61e87",
  storageBucket: "login-61e87.appspot.com",
  messagingSenderId: "242760786216",
  appId: "1:242760786216:web:83fe141eaa9add05be701d",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire