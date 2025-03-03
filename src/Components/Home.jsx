import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">🚀 Welcome to Firebase Authentication</h1>
      <p className="home-text">
        Securely sign in and manage your authentication with Firebase.
      </p>
      <div className="home-buttons">
        <Link className="home-button login nav-link" to={"login"}>Log In</Link>
        <Link className="home-button register nav nav-link" to={"register"} >Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
