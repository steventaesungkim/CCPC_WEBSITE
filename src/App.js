import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Router>
      <div className="CCPC__main">
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
