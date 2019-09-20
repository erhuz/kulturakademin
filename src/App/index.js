import React from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Podcast from "../pages/Podcast";
import Webcast from "../pages/Webcast";
import Search from '../pages/Search';
import Index from '../pages/Index';
import Test from '../pages/Test';

function AppRouter() {
  return (
    <Router>
      <div className="main"> </div>
      <div>

        {/* Declare routes here! */}
        <Route path="/" exact component={Index} />
        <Route path="/search/" component={Search} />
        <Route path="/category/" component={Category} />
        <Route path="/categories/" component={Categories} />
        <Route path="/webcast/" component={Webcast} />
        <Route path="/podcast/" component={Podcast} />
        <Route path="/menu/" component={Test} />
        <Route path="/test/" component={Test} />

      </div>
    </Router>
  );
}

export default AppRouter;
