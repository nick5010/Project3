import React from "react";
import "./ChatLog.css";
import MessageContent from "../MessageContent";

const ChatLog = () => (
  <div className="card chatLog">
    <h5 className="card-header">Channel 1</h5>
    <div className="card-body">
      <div className="messageContentInChat">
        <MessageContent />
      </div>
    </div>
    
  </div>
);

export default ChatLog;
