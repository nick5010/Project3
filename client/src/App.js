import React, { Component } from "react";

import "./App.css";
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import MessageInput from "./components/MessageInput"
import ChatLog from "./components/ChatLog"
import Wrapper from "./components/Wrapper"


class App extends Component {
  render() {
    return (
      <div>

        <Wrapper>
        <SideBar />
        <NavBar />
        <MessageInput />
        <ChatLog />
        </Wrapper>
        </div>
        );
  }
}

export default App;
