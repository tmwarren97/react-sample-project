import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import App from "./components/app";

import './style.less';

const routes = (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/home" component={App} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Suspense>
  </Router>
);

ReactDOM.render(routes, document.getElementById("root"));