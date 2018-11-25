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
   
this.props.updateMessage(this.state.message)


this.setState({ message: "" })

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
            <i className="material-icons prefix pencil">mode_edit</i>
            <div className="messageContent card col s10 m10 l10 center-align">
              <form className="textInput">
                <input className="typeMessage"
                  value={this.state.message}
                  onChange={this.handleInput.bind(this)}
                  placeholder="Please type your message here"
                  type="text"
                />
              </form>
            </div>
            <div className="row col s2 m2 l2">
            <a className="push_button blue" type="submit" onClick={this.sendMethod}>Send</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MessageInput;
