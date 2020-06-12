import React, { useEffect } from "react";
import "./Playlist.scss";
import {Icon, Grid, Divider} from "semantic-ui-react";
import VideoList from "../../containers/video-list/VideoList";
import CommentsItem from "../comments-item/CommentsItem";
import { useLocation } from "react-router-dom";

const PlayList = ({ comments = [], getComments, getVideo, videoInfo, isLoading, isError }) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    getVideo(query.get("id"));
    getComments(query.get("id"));
  }, [query.get("id")]);

  /**
   * Important conditional operator
   * */
  if (!videoInfo.hasOwnProperty("id") || videoInfo.id !== query.get("id")) {
    return null;
  }

  const commentsAll = comments.map((item) => {
    const { id, ...itemprops } = item;
    return (
      <div key={id} className='block-container__commentsItem'>
        <CommentsItem {...itemprops} />
      </div>
    );
  });
  return (
    <Grid>
      <Grid.Column width={12}>
        <div className="block-container__playlist-info">
          <iframe
            src={`https://youtube.com/embed/${videoInfo.id}`}
            height="700px"
            width="100%"
            title={videoInfo.id}
          />
          <h1 style={{margin: '0.2em 0'}}>{videoInfo.snippet.title}</h1>
          <div className="block-container__info-statistics">
            <div><span>{videoInfo.statistics.viewCount} просмотров</span></div>
            <div>
              <p>
                <Icon className="thumbs up outline" />
                <span>{videoInfo.statistics.likeCount}</span>
                <Icon className="thumbs down outline" />
                <span>{videoInfo.statistics.dislikeCount}</span>
              </p>
            </div>
          </div>
          <span>{videoInfo.snippet.description}</span>
          <Divider />
          <div className="block-container__comments">
            { !!isLoading || !!isError ? null : commentsAll}
          </div>
        </div>
      </Grid.Column>
      <Grid.Column width={2}>
        <div className="block-container__playlist">
          <VideoList />
        </div>
      </Grid.Column>
    </Grid>
  );
};
export default PlayList;
