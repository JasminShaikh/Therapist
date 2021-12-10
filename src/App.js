import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddClient from "./component/Client/AddClient";
import DisplayClient from "./component/Client/DisplayClient";
import Navbar from "./component/Common/Navbar";
import Register from "./component/Authentication/Register";
import Login from "./component/Authentication/Login";
import PrivateRoute from "./component/Authentication/PrivateRoute";

import "./assets/css/App.css";

function App() {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route exact path="/" component={DisplayClient} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/add-client" component={AddClient} />
        <PrivateRoute exact path="/add-client/:id" component={AddClient} />
        <Route component={() => <h3 className="text-center">Error 404</h3>} />
      </Switch>
    </Router>
  );
}

export default App;
