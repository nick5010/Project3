import React from "react";
import "./MessageInput.css";




class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageSent: false
    };
  }

  handleInput = event => {
    this.setState({ message: event.target.value });
  };

  sendMethod = event => {
    event.preventDefault();
    // alert("message: " + this.state.message);
this.props.updateMessage(this.state.message)

  };
// handleSend = () => {
//   this.props.onSend({
//     timestamp: Date.now(),
//     from: "Jeff",
//     message: this.state.message
//   })
// }
  render() {
    return (
      <div className="MessageInput" id="footer">
             
        <div className="messageInputDiv card col s12 m12 l12">
          <div className="secondaryRow2 row valign-wrapper">
            <i className="material-icons prefix">mode_edit</i>
            <div className="messageContent card col s10 m10 l10 center-align">
              <form className="textInput">
                <input
                  value={this.state.message}
                  onChange={this.handleInput.bind(this)}
                  placeholder="Please type your message here!"
                  type="text"
                />
              </form>
            </div>
            <div className="row col s2 m2 l2">
              <button type="submit"
                onClick={this.sendMethod}
                className="btn waves-effect waves-light sendBtn"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MessageInput;
