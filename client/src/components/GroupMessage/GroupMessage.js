import React from "react";
import "./GroupMessage.css"
class GroupMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div className="userInGroup">Channel {this.props.channelNumber} <br></br>{this.props.user}</div>;
  }
}

export default GroupMessage;
