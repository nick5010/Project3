import React from "react";
import "./SideBar.css";
import { Modal, Button } from "react-materialize";

class SideBar extends React.Component {
  createChat = () => {};

  render() {
    return (
      <div>
        <div id="mainRow" className="card col s4 m2 l2">
          <Modal
            header="Whom would you like to message ?"
            trigger={
              <Button className="newConvoBtn btn waves-effect waves-light">
                Start a Conversation
              </Button>
            }
          >
            <label>
              {" "}
              Start A New Message with:
              <input
                placeholder="Username"
                id="usernameInput"
                type="text"
                name="userName"
              />
            </label>
            <button className="btn waves-effect waves-light" type="submit">
              Start Message
            </button>
            {/* onClick={this.} */}
          </Modal>
          <h5 className="groupMessages">Group Messages</h5>
          <div className="groupMessageDiv">Channel 1</div>
          <div className="groupMessageDiv">Channel 2</div>
          <div className="groupMessageDiv">Channel 3</div>

          <h5 className="directMessages">Direct Messages</h5>

          <div className="directMessageDiv">Jeremy Shults</div>
          <div className="directMessageDiv">Jacob Broughton </div>
          <div className="directMessageDiv">Dwayne Johnson</div>
          <div className="directMessageDiv">Jake Gyllenhall</div>
          <div className="directMessageDiv">John Wayne</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
