import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";

import Wrapper from "./components/Wrapper";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

class App extends React.Component {
  state = {
    userMessages: [],
    groupMessages: []
  };

  render() {
    return (
      <Router>
        <div>
          
          <Wrapper>
            <NavBar />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={MainPage} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
