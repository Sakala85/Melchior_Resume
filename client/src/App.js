import React from "react";
import Profile from "./Profile/Profile";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Redirect to="/Profile" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
