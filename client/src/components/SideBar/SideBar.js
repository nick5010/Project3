import React from "react";
import "./SideBar.css";
import { Modal, Button, Input } from "react-materialize";
import DirectMessage from "../DirectMessage";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameList: ["Bob", "Mark", "Steve", "Jack", "Bill", "Rick", "Some-Guy"],
      user: [],
      directMessageLoaded: true,
      updateUserChat: false
    };
  }
  setDirectMessage = id => {
    console.log("----new console log----");
    const value = id.target.value;
    console.log(value);
    if (!this.state.user.includes(value)) {
      this.setState({
        user: [...this.state.user, value]
      });
    }
  };

  chatToggle = () => {
    this.setState({
      updateUserChat: true
    })
  }

  render() {
    return (
      
      <div>
        <div id="mainRow" className="card col s4 m2 l2">
          <Modal
            header="Start A New Message With:"
            className="modal"
            trigger={
              <div>
                <Button className="newConvoBtn btn waves-effect waves-light">
                  <img
                    className="messageIcon"
                    src="../../../images/groupMessageIcon.png"
                    alt="create group message"
                  />
                </Button>
                <Button className="newConvoBtn btn waves-effect waves-light">
                  <img
                    className="messageIcon"
                    src="../../../images/directMessageIcon.png"
                    alt="create group message"
                  />
                </Button>
              </div>
            }
          >
            {" "}
            <Input
              s={12}
              type="select"
              onChange={this.setDirectMessage}
              className="modalDrop"
            >
              {this.state.nameList.length
                ? this.state.nameList.map((person, index) => (
                    <option value={person} key={person}>
                      {person}
                    </option>
                  ))
                : "Nope"}
            </Input>
            <button
              onClick={this.chatToggle}
              className="btn waves-effect waves-light modalStartMsg modal-action modal-close"
            >
              Start Message
            </button>
          </Modal>

          <h5 className="groupMessages">Group Messages</h5>
          <div className="groupMessageDiv">Channel 1</div>
          <div className="groupMessageDiv">Channel 2</div>
          <div className="groupMessageDiv">Channel 3</div>
          <h5 className="directMessages">Direct Messages</h5>

          <div className="directMessageDiv">
          {console.log(this.state.updateUserChat)}
            {this.state.directMessageLoaded && this.state.updateUserChat
              ? this.state.user.length
                ? this.state.user.map((dmUser, index) => (
                    <DirectMessage key={dmUser} user={dmUser} />
                  ))
                : null
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
