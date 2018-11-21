import React from "react";
import SideBar from "../SideBar";
import MessageInput from "../MessageInput";
import ChatLog from "../ChatLog";
import NavBar from "../NavBar";
import "./MainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: "",

    }
  }

updatingMessage(msg){
  this.setState({ userMessage: msg}) 
}


  render() {
    return (
      <div id="mainPageDiv">
        <SideBar />
        <NavBar />
        <MessageInput updateMessage={this.updatingMessage.bind(this)}/>
        <ChatLog receivedMessage={this.state.userMessage}/>
      </div>
    );
  }
}

export default MainPage;

//main page AKA "/home"
