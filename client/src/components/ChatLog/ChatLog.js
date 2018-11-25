import React from "react";
import "./ChatLog.css";
import MessageContent from "../MessageContent";

const ChatLog = (props) => (
  <div className="card chatLog">
    <div className="card-body">
      <ul className="messageContentInChat">
        <MessageContent msgToBeTranlated={props.receivedMessage}/>
        
      </ul>
    </div>
  </div>
);

export default ChatLog;
