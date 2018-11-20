import React from "react";
import "./MessageContent.css";

class MessageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageSent: false
    };
  }

  // renderMessage = () => {

  // }

  // renderTime = event => {

  // }

  render() {
    return (

      <div className="messageContentParent">
        <li className="messageContentDiv">
          <div className="row">
            <div className="profilePic col s1 m1 l1">
              {/* Prop of component will replace this placeholder */}
              {/* {this.props.profilePic} */}
              <a href="https://www.placeholder.com">
                {" "}
                <img src="https://via.placeholder.com/40" alt="" />
              </a>
            </div>
            <div className="messageContent col s10 m10 l10">
              <p className="messageText">
                {/* Message: {this.state.messageText} */}
                {this.state.message}
              </p>
            </div>
            <div className="messageDateTimeDiv col s1 m1 l1">
              {/* 11:29 AM / 09-20-18 {formatDate(props.date)} */}
              <p className="messageDateTime">11:29 AM / 09-18</p>
              {/* <button className="btn waves-effect waves-light translateBtn">
                Translate Text
              </button> */}
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default MessageContent;
