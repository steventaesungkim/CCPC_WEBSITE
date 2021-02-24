import React, { lazy } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "../../stylesheet/Styles.css";
import "./AdminNav.css";

const LiveVideo = lazy(() => import("../../pages/liveVideo/LiveVideo"));
const VideoCenter = lazy(() => import("../../pages/videoCenter/VideoCenter"));

const AdminNav = ({ livevideo, videocenter }) => {
  let { path, url } = useRouteMatch();
  return (
    <section className="admin__body">
      <div className="sidebar__nav">
        <Link to={`${url}/livevideo`} className="sidebar__title active">
          {livevideo}
        </Link>
        <Link to={`${url}/videocenter`} className="sidebar__title">
          {videocenter}
        </Link>
        {/* <div className="sign__out">
          <Link to="/login" className="">sign out</Link>
        </div> */}
      </div>

      <section className="admin__container">
        <Switch>
          <Route path={`${path}/livevideo`} component={LiveVideo} />
          <Route path={`${path}/videocenter`} component={VideoCenter} />
        </Switch>
      </section>
    </section>
  );
};
export default AdminNav;
