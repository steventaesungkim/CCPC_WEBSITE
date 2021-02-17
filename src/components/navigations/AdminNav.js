import React, { lazy } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-route-dom";

const LiveVideo = lazy(() => import("../../pages/liveVideo/LiveVideo"));
const VideoCenter = lazy(() => import("../../pages/videoCenter/VideoCenter"));

const AdminNav = ({ liveVideo, videoCenter }) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <section className="sidebar__nav">
        <Link to={`${url}/livevideo`} className="sidebar__title">
          {liveVideo}
        </Link>
        <Link to={`${url}/videocenter`} className="sidebar__title">
          {videoCenter}
        </Link>
      </section>

      <section>
        <Switch>
          <Route path={`${path}/livevideo`} component={LiveVideo} />
          <Route path={`${path}/videocenter`} component={VideoCenter} />
        </Switch>
      </section>
    </>
  );
};
export default AdminNav;
