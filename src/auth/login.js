import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import './a.css'
const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyBBebJAZwyAKw9fR2wzX8U4Ak29q7eBWB8",
  authDomain: "hacker-c88de.firebaseapp.com",
  projectId: "hacker-c88de",
  storageBucket: "hacker-c88de.appspot.com",
  messagingSenderId: "369695476831",
  appId: "1:369695476831:web:76e3eb929fae370d6c5fea",
  measurementId: "G-3Q4YMYBP9F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [confirmSignupEmail, setConfirmSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmSignupPassword, setConfirmSignupPassword] = useState('');
  const [showMain, setShowMain] = useState(true);
  const history = useHistory();

  const handleLoginSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Success! Welcome back!');
        history.push('/top');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error occurred. Try again.');
        window.alert('Error occurred. Try again.');
      });
  };

  const handleSignUpSubmit = () => {
    const isVerified =
      signupEmail === confirmSignupEmail && signupPassword === confirmSignupPassword;

    if (isVerified) {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Success! Account created.');
          window.alert('Success! Account created.');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Error occurred. Try again.');
          window.alert('Error occurred. Try again.');
        });
    } else {
      window.alert('Email or password fields do not match. Try again.');
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Logout successful');
        history.push('/logina');
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  const toggleDisplay = () => {
    setShowMain(!showMain);
  };

  return (
    <div className="login-container">
      {showMain ? (
        <div id="main">
          <h1>Sign In</h1>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="submit" onClick={handleLoginSubmit}>
            Submit
          </button>
          <p>
            <span>or</span>
          </p>
          <button id="sign-up" onClick={toggleDisplay}>
            Sign Up
          </button>
        </div>
      ) : (
        <div id="create-acct">
          <h1>Create an Account</h1>
          <input
            id="email-signup"
            type="text"
            placeholder="Email *"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            id="confirm-email-signup"
            type="email"
            placeholder="Confirm Email *"
            value={confirmSignupEmail}
            onChange={(e) => setConfirmSignupEmail(e.target.value)}
          />
          <input
            id="password-signup"
            type="password"
            placeholder="Password *"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <input
            id="confirm-password-signup"
            type="password"
            placeholder="Confirm Password *"
            value={confirmSignupPassword}
            onChange={(e) => setConfirmSignupPassword(e.target.value)}
          />
          <button id="create-acct-btn" onClick={handleSignUpSubmit}>
            Create Account
          </button>
          <button id="return-btn" onClick={toggleDisplay}>
            Return to Login
          </button>
        </div>
    
      )}
      <button id="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LoginForm;
