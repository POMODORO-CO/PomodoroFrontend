import React from "react";
import "./App.css";
import NavBar from "./components/navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <NavBar />
            <Switch>
              <Route path="/" />
            </Switch>
      </Router>
    </div>
  );
}

export default App;