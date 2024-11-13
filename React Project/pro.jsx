import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { SignUpForm, Login } from './components'; // Adjust the path as needed
import './App.css';

const Home = () => {
  return <h2>Welcome to the Home Page!</h2>;
};

const LandingPage = ({ onSelect }) => {
  return (
    <div className="landing-container">
      <h1>Welcome</h1>
      <p>Please choose an option:</p>
      <button onClick={() => onSelect('login')}>Login</button>
      <button onClick={() => onSelect('signup')}>Sign Up</button>
    </div>
  );
};

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSignUp = () => {
    console.log("User signed up");
    setRedirectToHome(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setRedirectToHome(true);
    console.log("User logged in");
  };

  const renderRedirect = () => {
    if (redirectToHome) {
      return <Redirect to="/home" />;
    }
    return null;
  };

  const handleSelect = (type) => {
    setRedirectToHome(false);
    // Redirect based on the selected option
    if (type === 'login') {
      setRedirectToHome(true);
      return <Redirect to="/login" />;
    } else if (type === 'signup') {
      setRedirectToHome(true);
      return <Redirect to="/signup" />;
    }
  };

  return (
    <Router>
      <div className="Main">
        <Switch>
          <Route path="/" exact>
            <LandingPage onSelect={handleSelect} />
          </Route>
          <Route path="/signup">
            <SignUpForm onSignUp={handleSignUp} />
            {renderRedirect()}
          </Route>
          <Route path="/login">
            <Login onLogin={handleLogin} />
            {renderRedirect()}
          </Route>
          <Route path="/home">
            {isLoggedIn || redirectToHome ? <Home /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
