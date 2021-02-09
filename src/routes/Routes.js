import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CCPC from "../containers/landing/CCPC";
// import MissionStatement from "../containers/missionStatement/MissionStatement";

const About = lazy(() => import("../containers/about/About"));
const Admin = lazy(() => import("../containers/admin/Admin"));
const Bio = lazy(() => import("../containers/kimBio/Bio"));
const MissionStatement = lazy(() =>
  import("../containers/missionStatement/MissionStatement")
);
const Vision = lazy(() => import("../containers/vision/Vision"));
const Contact = lazy(() => import("../containers/contact/ContactUs"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CCPC} />
      <Route path="/about" component={About} />
      <Route exact path="/about/bio" component={Bio} />
      <Route exact path="/about/statement" component={MissionStatement} />
      <Route exact path="/about/vision" component={Vision} />
      <Route exact path="/about/contact" component={Contact} />

      {/* # = special route for admin page */}
      <Route path="/#" component={Admin} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
