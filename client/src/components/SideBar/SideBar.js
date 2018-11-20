import React from "react";
import "./SideBar.css";
import { Modal, Button, Input } from "react-materialize";
import DirectMessage from "../DirectMessage";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameList: ["Bob", "Mark", "Steve", "Jack", "Bill", "Rick", "Some-Guy"],
      users: [],
      chosenUser: null,
      directMessageLoaded: true,
    };
  }
 
  handleDropdownChange = event => {
    console.log("----new console log----");
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleStartMessage = () => {
    const { chosenUser } = this.state;
    if (!chosenUser) {
      return console.log("No user chosen.");
    }

    if (!this.state.users.includes(chosenUser)) {
      this.setState({
        users: [...this.state.users, chosenUser]
      });
    }
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
            name="chosenUser"
              s={12}
              type="select"
              onChange={this.handleDropdownChange}
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
              onClick={this.handleStartMessage}
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
            {this.state.directMessageLoaded
              ? this.state.users.length
                ? this.state.users.map((dmUser, index) => (
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
