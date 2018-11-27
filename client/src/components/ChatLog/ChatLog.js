import React from "react";
import "./ChatLog.css";
import MessageContent from "../MessageContent";
const ChatLog = (props) => (
  <div className="card chatLog">
    <div className="card-body">
      <ul className="messageContentInChat">
        {props.messages.length
          ? props.messages.map(message => (
            <MessageContent
              key={message.timestamp}
              timestamp={message.timestamp}
              from={message.from}
              text={message.text}
            />
          ))
          : <li className="defaultMessage">Type a message and send it!</li>}
      </ul>
    </div>
  </div>
);

export default ChatLog;
