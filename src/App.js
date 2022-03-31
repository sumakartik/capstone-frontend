import AppBarMain from "./AppBar";
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
  render() {
    return (
      <Routes>
        <Route path="/login" element={<LoginSignup app={this} />} />
        <Route path="/home" element={<Home app={this} isSignUp={true} />} />
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
