import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup/LoginSignup";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      isLogedIn: false,
      serverAddress:'https://capstone-sdio8-codetalkers.herokuapp.com',
      projects:undefined,
      products:undefined,
      lists:undefined,
      cards:undefined,
     
    };
  }


 userIsLogedIn() {
    console.log('cookie login',this.state.user.username,this.state.user.password)
    return this.state.user.username&&this.state.user.password;
  }
  componentDidMount(){
    if(!this.userIsLogedIn()){

      console.log('cookie login',this.state.user.username,this.state.user.password)
        this.login(this.state.user.username,this.state.user.password)
    }
  }
  handleSignUp(event){
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
  

    fetch(
      `${this.state.serverAddress}/signup?username=${username}&password=${password}&fname=${fname}&lname=${lname}`,
      {
        method: "POST",
        credentials: "include",
        referrerPolicy: "origin-when-cross-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
    
        },
      }
    )
    .then((res) => res.json())
      .then((user) => {
        if (user.username){
          this.handleGetProject();
          this.setState({ user: user,isLogedIn:true });
        }else{
          event.target.loginStatus.value=user.msg;
          this.setState({ user:{}});
        }
      
        console.log(user)
      
      }).catch((err) => console.log(err));
  }

  handleLogout(){
    fetch(
      `${this.state.serverAddress}/logout`,
      {
        method: "GET",
        credentials: "include",
        referrerPolicy: "origin-when-cross-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
    
        },
      }
    )
    .then((res) => res.json())
      .then((msg) => {


        this.setState({
          user:{},
          isLogedIn:false,
          projects:{},
          products:{},
          lists:{},
          cards:{}})
        console.log(msg)
      
      }).catch((err) => console.log(err));
    
  }

  login(username,password,eventTag){
    fetch(
      `${this.state.serverAddress}/login?username=${username}&password=${password}`,
      {
        method: "GET",
        credentials: "include",
        referrerPolicy: "origin-when-cross-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((user) => {
        if (user.username){
         
          this.setState({ user: user,isLogedIn:true });
          this.handleGetProject();
        }else{
          if(eventTag)
          eventTag.value=user.msg;
          this.setState({ user:{}});
        }
      
        console.log(this.state)
      })
      .catch((err) => console.log(err));
  }
  handleLogIn(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    this.login(username,password, event.target.loginStatus)
  }

  handleGetProject(){
   
    fetch(
      `${this.state.serverAddress}/projects`,
      {
        method: "GET",
        credentials: "include",
        referrerPolicy: "origin-when-cross-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((projects) => {
        console.log(projects)
        this.setState({ projects:projects});
      
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Routes>
         <Route path="/" element={<Home app={this} />} />
        <Route path="/login" element={<LoginSignup app={this} />} />
        <Route
          path="/signup"
          element={<LoginSignup app={this} isSignUp={true} />}
        />
        <Route path="/home" element={<Home app={this} />} />
      </Routes>
    );
  }
}




export default App;

// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./Home/Home";
// // import "./index.scss";
// import Card from "./components/Card/Card"

// export default class App extends React.Component {

// function App() {

//     return (
//       <div className="App">
//         {/* <Navbar />
//         <Home /> */}
//         <Card></Card>
//       </div>
//     )

//     }
