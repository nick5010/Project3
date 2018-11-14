import React from "react";
import "./SideBar.css";

const SideBar = () => (
  <div>
    <div id="mainRow" className="card col s4 m2 l2">
      <h5 className="groupMessages">Group Messages</h5>
      <div className="groupMessageDiv">Channel 1</div>
      <div className="groupMessageDiv">Channel 2</div>
      <div className="groupMessageDiv">Channel 3</div>
      <div className="groupMessageDiv">Channel 4</div>
      <div className="groupMessageDiv">Channel 5</div>

      <h5 className="directMessages">Direct Messages</h5>

      <div className="directMessageDiv">Jeremy Shults</div>
      <div className="directMessageDiv">Jacob Broughton </div>
      <div className="directMessageDiv">Oprah Winfrey SUCKS!</div>
      <div className="directMessageDiv">Dwayne Johnson</div>
      <div className="directMessageDiv">Jake Gyllenhall</div>
      <button className="card 3" id="newConvoBttn">
        Start a New Conversation!
      </button>
    </div>
  </div>
);

export default SideBar;
