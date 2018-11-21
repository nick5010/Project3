import React from "react";
import "./ChatLog.css";
import MessageContent from "../MessageContent";

const ChatLog = (props) => (
  <div className="card chatLog">
    <h5 className="card-header">Channel 1</h5>
    <div className="card-body">
      <div className="messageContentInChat">
        <MessageContent msgToBeTranlated={props.receivedMessage}/>
        
      </div>
    </div>
    
  </div>
);

export default ChatLog;
