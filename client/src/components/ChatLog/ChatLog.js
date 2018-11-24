import React from "react";
import "./ChatLog.css";
import MessageContent from "../MessageContent";

const ChatLog = (props) => (
  <div className="card chatLog">
    <div className="card-body">
      <div className="messageContentInChat">
        <MessageContent msgToBeTranlated={props.receivedMessage}/>
        
      </div>
    </div>
  </div>
);

export default ChatLog;
