import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CCPS from "../containers/landing/CCPS";

const About = lazy(() => import("../containers/about/About"));
const Admin = lazy(() => import("../containers/admin/Admin"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={CCPS} />
      <Route path="/about" component={About} />
      {/* # = special route for admin page */}
      <Route path="/#" component={Admin} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
