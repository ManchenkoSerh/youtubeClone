import React from "react";
import { Grid } from "semantic-ui-react";
import BodyLeft from "../sidebar/BodyLeft";
import "./BodyYT.scss";
import VideoList from "../../containers/video-list/VideoList";
import { Switch, Route } from "react-router-dom";
import SearchVideo from "../../containers/search-video/SearchVideo";
import PlayVideo from "../../containers/play-video/PlayVideo";
import TrendingList from "../../containers/trending-list/TrendingList";
import Routers from "../helpers/routes";

function BodyYT() {
  return (
    <Grid.Row className="sidebar-white">
      <Grid.Column width={2}>
        <BodyLeft />
      </Grid.Column>
      <Grid.Column width={14}>
        <Routers/>
      </Grid.Column>
    </Grid.Row>
  );
}
  export default BodyYT;
