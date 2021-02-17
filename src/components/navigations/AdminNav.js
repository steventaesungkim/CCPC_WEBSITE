import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-route-dom";

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
          <Route path={`${path}/livevideo`} />
          <Route path={`${path}/videocenter`} />
        </Switch>
      </section>
    </>
  );
};
export default AdminNav;
