import React from "react";
class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessageLoaded: true
    };
  }

  render() {
    return <div>{this.state.directMessageLoaded}</div>;
  }
}

export default DirectMessage;
