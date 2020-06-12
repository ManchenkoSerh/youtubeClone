import React, { useEffect } from "react";
import "./Playlist.css";
import { Icon, Grid } from "semantic-ui-react";
import VideoList from "../../containers/video-list/VideoList";
import CommentsItem from "../comments-item/CommentsItem";
import { useLocation } from "react-router-dom";
import {ConvertNumber} from "../helpers/helpers";

const PlayList = ({ comments = [], getComments, getVideo, obj, videoInfo }) => {
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
      <div key={id}>
        <CommentsItem
          {...itemprops} /*getIcon={()=>getIconChennal(snippet.topLevelComment.authorChannelId.value)}*/
        />
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
          ></iframe>
          <h1>{videoInfo.snippet.title}</h1>
          <div className="block-container__info-statistics">
            <span>{ConvertNumber(videoInfo.statistics.viewCount)} просмотров</span>
            <Icon className="thumbs up outline" />
            <span>{videoInfo.statistics.likeCount}</span>
            <Icon className="thumbs down outline" />
            <span>{videoInfo.statistics.dislikeCount}</span>
          </div>
          <br />
          <span>{videoInfo.snippet.description}</span>
          <div className="block-container__comments">
            {commentsAll}
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
