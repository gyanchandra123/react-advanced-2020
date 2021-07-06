import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/people">
          <People />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;

// note : the <Router> must wrap the root component in our app.
// in react router: if the paths matches , then both the component will be display.
/* 
1. for example : if we go to the url '/people'. then 2 urls related component will be 
display:  '/' && 'people'
2. solution : use exact
  - we can probably used the 'exact in every path of the components'
*/
