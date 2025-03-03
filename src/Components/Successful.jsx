import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {


  const nav = useNavigate()


  const logOut = ()=>{

    nav('/')
  }

  return (
   <>
   <div className="success-container">
      <h1 className="success-heading">🎉 Login Successful! 🎉</h1>
      <p className="success-text">
        You have successfully logged in. Welcome to Dashboard!
      </p>
      
      <button className="success-button" onClick={logOut}>
        Logout
      </button>
    </div>
   </>
  );
};


export default Success;
