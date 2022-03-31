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
   
      console.log('hiissosososos',props.app.state.isLogedIn);
        if(props.app.state.isLogedIn){

        
            navigate('/');
        
        }
    })
  return (
    <section>
      <div>
        <div className="form-box solid">
          <form onSubmit={(e) => isSignUp?props.app.handleSignUp(e):props.app.handleLogIn(e)}>
            {isSignUp ? (
              <h1 className="login-text">Sign Up</h1>
            ) : (
              <h1 className="login-text">Login</h1>
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
                className="login-box"
               readOnly
              />
               <br></br>
           

            {isSignUp ? (
              <><input type="submit" value="SIGNUP" className="-btn" /><Link to='/login'>Login</Link></>
            ) : (
              <><input type="submit" value="LOGIN" className="login-btn" /><Link to='/signup'>Sign Up</Link></>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginSignup;
