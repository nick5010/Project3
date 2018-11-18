import React from "react";
class DirectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessageLoaded: true
    };
  }

  render() {
    return <div>John Smith</div>;
  }
}

export default DirectMessage;
