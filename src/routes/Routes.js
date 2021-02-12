import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CCPC from "../pages/landing/CCPC";

const About = lazy(() => import("../pages/about/About"));
const Live = lazy(() => import("../pages/live/Live"));

const Admin = lazy(() => import("../pages/admin/Admin"));
const Bio = lazy(() => import("../pages/kimBio/Bio"));
const MissionStatement = lazy(() =>
  import("../pages/missionStatement/MissionStatement")
);
const Vision = lazy(() => import("../pages/vision/Vision"));
const Contact = lazy(() => import("../pages/contact/ContactUs"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CCPC} />
      <Route path="/live" component={Live} />
      <Route path="/about" component={About} />

      <Route exact path={"about/:bioId"} component={Bio} />
      <Route exact path={"about/:statementId"} component={MissionStatement} />
      <Route exact path={"about/:visionId"} component={Vision} />
      <Route exact path={"about/:contactId"} component={Contact} />

      {/* # = special route for admin page */}
      <Route path="/#" component={Admin} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
