import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
// import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <div className="CCPC__main">
          <Routes />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
