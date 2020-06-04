import React,{useEffect} from 'react';
import {Grid} from 'semantic-ui-react'
import BodyLeft from '../sidebar/BodyLeft'
import './BodyYT.scss'
import VideoList from "../../containers/video-list/VideoList";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import PlayList from "../Playlist/Playlist";
import SearchVideo from '../../containers/search-video/SearchVideo';
import PlayVideo from "../../containers/play-video/PlayVideo";

function BodyYT() {
    return (
      <Grid.Row className='sidebar-white'>
        <Grid.Column width={2} >
            <BodyLeft/>
        </Grid.Column>
        <Grid.Column  width={14}>
          <Switch>
            <Route path="/" exact component={VideoList}/>
            <Route path="/player" component={PlayVideo}/>
            <Route path="/search" component={SearchVideo}/>
          </Switch>
        </Grid.Column>
      </Grid.Row>
    );
  }
  export default BodyYT;
