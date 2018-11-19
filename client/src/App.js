import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import "./index.css";

class App extends React.Component {
  state = {
    userMessages: [],
    groupMessages: []
  };

  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/" component={MainPage} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
