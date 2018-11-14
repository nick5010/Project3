import React from "react";
import "./NavBar.css";

const NavBar = () => (
  
      <nav className="nav-extended teal header">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            App Name
          </a>
          {/* <!-- <a href="something.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> --> */}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#test1">Tab 1</a>
            </li>
            <li className="tab">
              <a href="#test2">
                Tab 2
              </a>
            </li>
            <li className="tab">
              <a href="#test3">Tab 3</a>
            </li>
            <li className="tab">
              <a href="#test4">Tab 4</a>
            </li>
          </ul>
        </div>
      </nav>
   
);

export default NavBar;
