//React Imports
import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

//Component Imports
import Clicker from "./pages/clicker/Clicker";

class App extends Component {
  render() 
  {
    return (
      <Fragment>
        <Router>
          <Route exact path='/' component={Clicker} />          
        </Router>
      </Fragment>
    );
  }
}

export default App;