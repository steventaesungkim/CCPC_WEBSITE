import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CCPC from "../pages/landing/CCPC";

const About = lazy(() => import("../pages/about/About"));
const Live = lazy(() => import("../pages/live/Live"));
const Admin = lazy(() => import("../pages/admin/Admin"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CCPC} />
      <Route path="/live" component={Live} />
      <Route path="/about" component={About} />

<<<<<<< HEAD
      {/* <Redirect to="/" /> */}
=======
      <Route path="/admin" component={Admin} />

      <Redirect to="/" />
>>>>>>> 954d61db2025d8c1a65c79e5f74eceb64826f602
    </Switch>
  );
};

export default Routes;
