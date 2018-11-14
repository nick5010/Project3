import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import MessageInput from "./components/MessageInput"

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <NavBar />
        <MessageInput />
        </div>
        );
  }
}

export default App;
