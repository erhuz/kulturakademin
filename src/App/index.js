import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from '../pages/Index';
import Search from '../pages/Search';
import Test from '../pages/Test';
import Header from '../components/Header';

function AppRouter() {
  return (
    <Router>
      <div>
        {Header}

        {/* Declare routes here! */}
        <Route path="/" exact component={Index} />
        <Route path="/search/" component={Search} />
        <Route path="/categories/" component={Test} />
        <Route path="/menu/" component={Test} />
        <Route path="/test/" component={Test} />
      </div>
    </Router>
  );
}

export default AppRouter;
