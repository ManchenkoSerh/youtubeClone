import React from "react";
import VideoList from "../../containers/video-list/VideoList";
import PlayVideo from "../../containers/play-video/PlayVideo";
import SearchVideo from "../../containers/search-video/SearchVideo";
import TrendingList from "../../containers/trending-list/TrendingList";
import {Route, Switch} from "react-router-dom";

const Routers=()=>{
    return(
        <Switch>
            <Route path="/" exact component={VideoList} />
            <Route path="/player" component={PlayVideo} />
            <Route path="/search" component={SearchVideo} />
            <Route path="/trending" component={TrendingList} />
        </Switch>
    )

}
export default Routers;
