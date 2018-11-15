import React from "react";
import SideBar from "../SideBar";
import MessageInput from "../MessageInput";
import ChatLog from "../ChatLog";

const MainPage = () => (
  <div>
    <SideBar />
    <MessageInput />
    <ChatLog />
  </div>
);

export default MainPage;


//main page AKA "/home"