import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
// import axios from "axios"
import "./index.css";

class App extends React.Component {
  // state = {
  //   data: [],
  //   id: 0,
  //   message: null,
  //   intervalIsSet: false,
  //   idToDelete: null
  // };

  // // when component mounts, fetch all existing data in DB
  // componentDidMount() {
  //   this.getDataFromDb();
  // };

  // // First get method that uses the backend api to fetch data from the database
  // getDataFromDb = () => {
  //   fetch("/api/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }))
  // };

  // // Put method that uses the API to create new query into our DB
  // putDataToDb = message => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post("/api/putData", {
  //     id: idToBeAdded,
  //     message: message
  //   });
  // };

  // // Delete Method to remove existing db info
  // deleteFromDb = idToDelete => {
  //   let objIdToDelete = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id === idToDelete) {
  //       objIdToDelete = dat._id;
  //     }
  //   });

  //   axios.delete("/api/deleteData", {
  //     data: {
  //       id: objIdToDelete
  //     }
  //   });
  // };

  // OG part of this component
  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/" component={MainPage} />
            
            {/* this is commented out BC i thought it might interfere with api routes */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;