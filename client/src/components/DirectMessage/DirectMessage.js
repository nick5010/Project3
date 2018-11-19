import React from "react";
import "./DirectMessage.css"
class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessageLoaded: true

    };
  }

  render() {
    return <div className="chatUser">{this.props.user}</div>;
  }
}

export default DirectMessage;
