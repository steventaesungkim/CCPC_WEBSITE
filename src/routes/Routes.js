import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const CCPS = lazy(() => import("../components/landing/CCPS"));

const Route = () => {
  return (
    <Switch>
      <Route path="/" exact component={CCPS} />
    </Switch>
  );
};

export default Routes;
