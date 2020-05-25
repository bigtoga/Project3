/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

import Homepage from "views/project/01-homepage.js";
import CrazyTimes from "views/project/02-crazy.js";
import Prediction from "views/project/03-prediction.js";
import Trends from "views/project/04-trends.js";
import Science from "views/project/05-science.js";
import Failures from "views/project/06-failures.js";
import Stack from "views/project/07-stack.js";

ReactDOM.render(
  <BrowserRouter>

    <Switch>

      <Route
      path="/home"
      render={props => <Homepage {...props} />}
      />

      <Route
      path="/welcome"
      render={props => <Index {...props} />}
      />

      <Route
      path="/crazy"
      render={props => <CrazyTimes {...props} />}
      />

      <Route
      path="/prediction"
      render={props => <Prediction {...props} />}
      />

      <Route
      path="/trends"
      render={props => <Trends {...props} />}
      />

      <Route
      path="/science"
      render={props => <Science {...props} />}
      />

      <Route
      path="/failures"
      render={props => <Failures {...props} />}
      />

      <Route
      path="/stack"
      render={props => <Stack {...props} />}
      />

      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />

      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />

      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />

      <Redirect from="/" to="/welcome" />

    </Switch>

  </BrowserRouter>,
  document.getElementById("root")
);
