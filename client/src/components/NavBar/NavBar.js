import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: "../public/images/Background_08.mov"
    }
  }

  render() {
    return (
      <nav className="nav-extended header">
        <div className="nav-wrapper">
          <i className="settings fa fa-cog fa-spin"></i>
          <span className="comet">Comet</span>
          <p className="shortMsg">A corporate messaging app</p>
        </div>
        <div className="nav-content">
        </div>
      </nav>
    )
  }
};

export default NavBar;