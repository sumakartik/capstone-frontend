import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextInfo from './utils/dataApi.js'
import Cookies from 'js-cookie'

const username=Cookies.get('username');
const password=Cookies.get('password');
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App user={{username:username,password:password}}/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
