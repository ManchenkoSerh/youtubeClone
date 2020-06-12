import React from "react";
import { Grid } from "semantic-ui-react";
import BodyLeft from "../sidebar/BodyLeft";
import "./Main.scss";
import VideoList from "../../containers/video-list/VideoList";
import { Switch, Route } from "react-router-dom";
import SearchVideo from "../../containers/search-video/SearchVideo";
import PlayVideo from "../../containers/play-video/PlayVideo";
import TrendingList from "../../containers/trending-list/TrendingList";

function Main() {
  return (
    <Grid.Row className="sidebar-white">
      <Grid.Column width={2}>
        <BodyLeft />
      </Grid.Column>
      <Grid.Column width={14}>
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/player" component={PlayVideo} />
          <Route path="/search" component={SearchVideo} />
          <Route path="/trending" component={TrendingList} />
        </Switch>
      </Grid.Column>
    </Grid.Row>
  );
}
  export default Main;
