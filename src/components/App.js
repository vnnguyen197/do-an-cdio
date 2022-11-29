import React, {  useState, useEffect } from 'react';
import './../styles/App.css';
import Firebase from "../config/fire";
import Trangchulogin from './Trangchulogin';
import Dangnhap from './login/Dangnhap';

function HomePage() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
            default:
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    Firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
            default:
        }
      });
  }

  const handleLogout = () => {
    Firebase.auth().signOut();
  };

  const authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [user]);

  return (
      <div className="App">
        {user ? (
          <Trangchulogin
            handleLogout={handleLogout}/>
        ) : (
          <Dangnhap
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
          )}   
      </div>
  );
}

export default HomePage;
