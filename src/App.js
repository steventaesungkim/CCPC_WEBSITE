import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="App">
          <Routes />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
