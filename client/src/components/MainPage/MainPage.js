import React from "react";
import SideBar from "../SideBar";
import MessageInput from "../MessageInput";
import ChatLog from "../ChatLog";
import NavBar from "../NavBar";

const MainPage = () => (
  <div>
    <SideBar />
    <NavBar />
    <MessageInput />
    <ChatLog />
  </div>
);

export default MainPage;


//main page AKA "/home"