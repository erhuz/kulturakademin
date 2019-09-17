

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../pages/Index';
import Search from '../pages/Search';
import Test from '../pages/Test';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search/">Search</Link>
            </li>
            <li>
              <Link to="/test/">Test</Link>
            </li>
          </ul>
        </nav>

        {/* Declare routes here! */}
        <Route path="/" exact component={Index} />
        <Route path="/search/" component={Search} />
        <Route path="/test/" component={Test} />
      </div>
    </Router>
  );
}

export default AppRouter;
