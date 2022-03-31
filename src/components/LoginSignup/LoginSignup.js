import { useState } from "react";
import "./styles.css";
import { useContext } from "react";
import UserContextInfo from "../../utils/dataApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {Link} from 'react-router-dom'
function LoginSignup(props) {
  const isSignUp = props.isSignUp;
 
  const navigate = useNavigate();

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
                  First Name :
                  <input
                    type="text"
                    name="fname"
                    className="login-box"
                    required
                  />
                </label>
                <br></br>
                <label htmlFor="lname">
                  {" "}
                  Last Name :
                  <input
                    type="text"
                    name="lname"
                    className="login-box"
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
              User Name :
              <input
                type="text"
                name="username"
                className="login-box"
                required
              />
            </label>
            <br></br>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                className="login-box"
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
              <><input type="submit" value="SIGNUP" className="-btn" /><Link to='/login'>LogIn</Link></>
            ) : (
              <><input type="submit" value="LOGIN" className="login-btn" /><Link to='/signup'>SinUp</Link></>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginSignup;
