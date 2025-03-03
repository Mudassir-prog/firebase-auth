import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from '../Firebase/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState("")
  const [message , setMessage] = useState("")
  const nav = useNavigate()
 
  const handleSignUP = async (e)=>{

    e.preventDefault()
    
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      nav('/login')
    }
    catch(error){
      setMessage(`Error ${error.message}`)
    }
  }
  console.log(name);
  

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-heading">🚀 Create an Account</h2>
        <p className="signup-subtext">Sign up to get started</p>
        <form className="signup-form" onSubmit={handleSignUP}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <br />
        {message && <p className="error-message">{message}</p>}
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
