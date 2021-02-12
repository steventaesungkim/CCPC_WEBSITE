import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CCPC from "../containers/landing/CCPC";

const About = lazy(() => import("../containers/about/About"));
const Live = lazy(() => import("../containers/live/Live"));

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
