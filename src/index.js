import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Project from "./Project";

const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        <Route exact path="/Project" element={<Project />}/>
      </Routes>
    </div>
  </Router>
);

ReactDOM.render(routing,document.getElementById("root"));