import React, { lazy } from "react";
import "../../stylesheet/Styles.css";
import "./AdminNav.css";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

// const LiveVideo = lazy(() => import("../../pages/liveVideo/LiveVideo"));
// const VideoCenter = lazy(() => import("../../pages/videoCenter/VideoCenter"));

const AdminNav = ({ livevideo, videocenter, LiveVideo, VideoCenter }) => {
  let { path, url } = useRouteMatch();
  return (
    <section className="admin__body">
      <div className="sidebar__nav">
        <Link to={`${url}/livevideo`} className="sidebar__title">
          {livevideo}
        </Link>
        <Link to={`${url}/videocenter`} className="sidebar__title">
          {videocenter}
        </Link>
      </div>

      <section className="container">
        <Switch>
          <Route path={`${path}/livevideo`} component={LiveVideo} />
          <Route path={`${path}/videocenter`} component={VideoCenter} />
        </Switch>
      </section>
    </section>
  );
};
export default AdminNav;
