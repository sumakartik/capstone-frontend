import { useState } from "react";
import "./styles.css";
import { useContext } from "react";
import UserContextInfo from "../../utils/dataApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
function LoginSignup(props) {
  const isSignUp = props.isSignUp;
 

  const navigate=useNavigate();
    useEffect(()=>{
   
    
        if(props.app.state.isLogedIn){

        
            navigate('/');
        
        }
    })
  return (
    <section>
    
      <div>
        <div className="form-box solid">
          <form onSubmit={(e) => isSignUp?props.app.handleSignUp(e):props.app.handleLogIn(e)}>
            <p><h1>Code-Talkers</h1></p>
            {isSignUp ? (
              <h1 className="login-text">Sign Up</h1>
            ) : (
              <h3 className="login-text">Login</h3>
            )}

            {isSignUp ? (
              <>
                <label htmlFor="fname">

                  <input
                    type="text"
                    name="fname"
                    className="login-box"
                    placeholder="First Name"
                    required
                  />
                </label>
                <br></br>
                <label htmlFor="lname">
                  {" "}
                  
                  <input
                    type="text"
                    name="lname"
                    className="login-box"
                    placeholder="Last Name"
                    required
                  />
                </label>
              </>
            ) : (
              <></>
            )}
            <br></br>
            <label htmlFor="username">
              {" "}
              
              <input
                type="text"
                name="username"
                className="login-box"
                placeholder="Username"
                required
              />
            </label>
            <br></br>
            <label htmlFor="password">
              
              <input
                type="password"
                name="password"
                className="login-box"
                placeholder="Password"
                required
              />
            </label>
            <br></br>
            <input
                type="text"
                name='loginStatus'
                className="login-status"
               readOnly
              />
               <br></br>
           

            {isSignUp ? (
              <><input type="submit" value="SIGNUP" className="-btn" /><br></br><Link to='/login'>Already have an account? Log in</Link></>
            ) : (
              <><input type="submit" value="LOGIN" className="login-btn" /><br></br><Link to='/signup'>Don't have an account? Sign up</Link></>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginSignup;
