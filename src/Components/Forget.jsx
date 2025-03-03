import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../Firebase/Firebase'



const Forget = () => {

  const [email, setEmail] = useState("")
  const [message , setMessage] = useState("")

  const restPassword = async (e)=>{
    e.preventDefault();
  
    try{
      await sendPasswordResetEmail( auth ,email)
      setMessage("Password reset email sent! Check your inbox.")
    }
    catch(error){

      setMessage(`Error ${error.message}`)
    }
  }

  return (
    <div className="forget-container">
      <div className="forget-box">
        <h2 className="forget-heading">🔑 Forgot Password?</h2>
        <p className="forget-subtext">Enter your email to reset your password</p>
        <form className="forget-form" onSubmit={restPassword}>
          <div className="input-group">
            <input type="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <button type="submit" className="forget-button">Reset Password</button>
        </form>
        <br />
        {message && <p className="error-message">{message}</p>}

        <p className="back-text">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Forget;
