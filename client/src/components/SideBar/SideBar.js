import React from "react";
import "./SideBar.css";
import { Modal, Button } from "react-materialize";


class SideBar extends React.Component  {
createChat = () =>{

}

render() {
  return (
    <div>

      <div id="mainRow" className="card col s4 m2 l2">
        <h5 className="groupMessages">Group Messages</h5>
        <div className="groupMessageDiv">Channel 1</div>
        <div className="groupMessageDiv">Channel 2</div>
        <div className="groupMessageDiv">Channel 3</div>

        <h5 className="directMessages">Direct Messages</h5>

        <div className="directMessageDiv">Jeremy Shults</div>
        <div className="directMessageDiv">Jacob Broughton </div>
        <div className="directMessageDiv">Oprah Winfrey</div>
        <div className="directMessageDiv">Dwayne Johnson</div>
        <div className="directMessageDiv">Jake Gyllenhall</div>

      <Modal
        header="Who do you want to message ?"
        trigger={<Button className="newConvoBtn btn waves-effect waves-light">Start a Conversation</Button>}
      >
        <label> Create A New Message
        <input placeholder="Username" id="usernameInput" type="text" name="userName"/>
        </label>
        <button className="btn waves-effect waves-light" type="submit" >Start Message</button>
        {/* onClick={this.} */}
      </Modal>
        {/* <button className="btn waves-effect waves-light newConvoBtn" type="submit" name="action" onClick={this.#}>Start A New Conversation
  
  </button> */}
      </div>
    </div>
  );
};
}

export default SideBar;
