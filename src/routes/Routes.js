import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CCPC from "../pages/landing/CCPC";

<<<<<<< HEAD
import CCPC from "../containers/landing/CCPC";

const About = lazy(() => import("../containers/about/About"));
const Admin = lazy(() => import("../containers/admin/Admin"));
const Bio = lazy(() => import("../containers/kimBio/Bio"));
=======
const About = lazy(() => import("../pages/about/About"));
const Live = lazy(() => import("../pages/live/Live"));
>>>>>>> 82ee5bfe4bce7bfd1d9b3a192a1e72b7b6b09748

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CCPC} />
      <Route path="/live" component={Live} />
      <Route path="/about" component={About} />
<<<<<<< HEAD
      <Route path="/about/bio" component={Bio} />
      {/* # = special route for admin page */}
      <Route path="/182.1.0.2019/admin" component={Admin} />
=======
>>>>>>> 82ee5bfe4bce7bfd1d9b3a192a1e72b7b6b09748

      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

export default Routes;
