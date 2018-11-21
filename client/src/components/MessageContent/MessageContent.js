import React from "react";
import "./MessageContent.css";

const googleTranslate = require("google-translate")(
  "AIzaSyBqxoLKtpqHsvMm9aNpa6NWJ42t2OYnN9A"
);

class MessageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageSent: false,
      translated: false,
      translatedText: ""
    };
  }

  translate = (message, language) => {
    let that = this;
    googleTranslate.translate(this.props.msgToBeTranlated, "pt", function(
      err,
      translation
    ) {
      console.log(translation.translatedText);
      console.log(that);

      that.setState({translatedText: translation.translatedText, translated: true})
    });
  };

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
              {!this.state.translated ? <p className="messageText">{this.props.msgToBeTranlated}</p> : <p className="messageText">{this.state.translatedText}</p>}
            </div>
            <div className="messageDateTimeDiv col s1 m1 l1">
              {/* 11:29 AM / 09-20-18 {formatDate(props.date)} */}
              <p className="messageDateTime">11:29 AM / 09-18</p>
              <button onClick={this.translate} className="btn waves-effect waves-light translateBtn">
                Translate Text
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default MessageContent;
