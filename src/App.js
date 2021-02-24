import React, { Component, Suspense, Route } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Header from "./components/headers/Header";

// const Admin = lazy(() => import("./pages/admin/Admin"));

export const adminRoute = (
  <div className="CCPC__main">
    <Suspense fallback={<p>Loading...</p>}>
      <Routes />
    </Suspense>
  </div>
);

export const standardRoutes = (
  <div className="CCPC__main">
    <Header />
    <Suspense fallback={<p>Loading...</p>}>
      <Routes />
    </Suspense>
  </div>
);

class App extends Component {
  state = {
    adminPath: "/admin",
  };

  render() {
    return (
      <Router>
        <div className="CCPC__main">
          {/* <Route exact path={!this.state.adminPath} /> ? ({standardRoutes}) : (
          {adminRoute}) */}

          {/* NEED TO THINK OF LOGIC TO HAVE <HEADER /> ON ALL PAGES EXCEPT /ADMIN */}
          {/* <Header /> */}

          <Suspense fallback={<p>Loading...</p>}>
            <Routes />
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
