import React from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import YoutubeApi from '../models/Youtube';
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Podcast from "../pages/Podcast";
import Webcast from "../pages/Webcast";
import Search from '../pages/Search';
import Index from '../pages/Index';
import Test from '../pages/Test';

const YoutubeVideos = require('../data/youtubeVideos');

function AppRouter() {
  // const query = '';
  // const maxResults = 50;
  // const channelId = 'UCy0HB84UQmO6I3WTP9Flo2Q';

  // YoutubeApi.searchAll(query, maxResults, {channelId: channelId}).then((data) => {
  //   console.log(data);
  // },(err) => {
  //   console.error(err);
  // })

  console.log(YoutubeVideos);


  return (
    <Router>
      <div className="padding-div"> </div>
      <div>

        {/* Declare routes here! */}
        <Route path="/" exact component={Index} />
        <Route path="/search/" component={Search} />
        <Route path={"/category/:name"} component={Category} />
        <Route path="/categories/" component={Categories} />
        <Route path="/webcast/:id" component={Webcast} />
        <Route path="/podcast/:id" component={Podcast} />
        <Route exact path="/webcast/" render={() => <h3 style={{ color: '#fff' }} >No ID </h3>} />
        <Route exact path="/podcast/" render={() => <h3 style={{ color: '#fff' }} >No ID </h3>} />
        <Route path="/menu/" component={Test} />
        <Route path="/test/" component={Test} />

      </div>
      <div className="padding-div"> </div>
    </Router>
  );
};

export default AppRouter;
