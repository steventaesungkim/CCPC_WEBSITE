import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CCPC from "../containers/landing/CCPC";

const About = lazy(() => import("../containers/about/About"));
const Admin = lazy(() => import("../containers/admin/Admin"));
const Bio = lazy(() => import("../containers/kimBio/Bio"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CCPC} />
      <Route path="/about" component={About} />
      <Route exact path="/about/bio" component={Bio} />

      {/* # = special route for admin page */}
      <Route path="/#" component={Admin} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
