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
      serverAddress:'http://localhost:6001',
      projects:undefined,
      products:undefined,
      lists:undefined,
      cards:undefined
    };
  }
  userIsLogedIn() {
    return false;
  }
  // componentDidMount() {
  //   if (this.state.user.username && this.state.user.password) {
  //     fetch("http://localhost:", {
  //       method: "GET",
  //       credentials: "include",
  //       referrerPolicy: "origin-when-cross-origin",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then((user) => {
  //         if (user.username.length) this.setState({ user: user });
  //       });
  //   }
  // }
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
  handleLogIn(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
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
          this.getProduct();
          this.setState({ user: user,isLogedIn:true });
        }else{
          event.target.loginStatus.value=user.msg;
          this.setState({ user:{}});
        }
      
        console.log(user)
      })
      .catch((err) => console.log(err));
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
