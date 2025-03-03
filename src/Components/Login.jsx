import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/Firebase'



const Login = () => {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [message,setMessage] = useState("")
  const nav = useNavigate()

  const logIn = async(e)=>{
  
  e.preventDefault()

  try{
  await signInWithEmailAndPassword(auth,email,password)
  nav('/successfull')
  }
  catch(error){
    setMessage(`Error ${error.message}`)
  }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">🔑 Welcome Back!</h2>
        <p className="login-subtext">Login to continue</p>
        <form className="login-form" onSubmit={logIn}>
          <div className="input-group">
            <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {message && <p className="error-message">{message}</p>}
        <p className="forgot-password">
          <Link to="/forget">Forgot Password?</Link>
        </p>
        <p className="register-text">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
