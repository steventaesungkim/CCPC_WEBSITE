import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CCPC from "../pages/landing/CCPC";

const About = lazy(() => import("../pages/about/About"));
const Live = lazy(() => import("../pages/live/Live"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CCPC} />
      <Route path="/live" component={Live} />
      <Route path="/about" component={About} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
