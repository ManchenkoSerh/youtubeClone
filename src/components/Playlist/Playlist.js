import React, {useEffect} from "react";
import "./Playlist.css"
import {Icon, Grid} from 'semantic-ui-react';
import VideoList from "../../containers/video-list/VideoList"
import CommentsItem from "../comments-item/CommentsItem"

const PlayList=({comments=[],getComments,obj})=>{
    useEffect(() => {
        const timer = window.setTimeout(() => {
            getComments(obj.id);
        }, 1000);
        return () => {
            // Return callback to run on unmount.
            window.clearInterval(timer);
        };
    }, []);
    console.log(obj);
    console.log(comments);
    const commentsAll=comments.map((item)=>{
        const {id,...itemprops}=item;
        return(
            <li key={id}>
                <CommentsItem {...itemprops} /*getIcon={()=>getIconChennal(snippet.topLevelComment.authorChannelId.value)}*//>
            </li>
        )
    })

    return(
            <Grid>
                <Grid.Column width={12}>
            <div className="block-container__playlist-info">
            <iframe src={`https://youtube.com/embed/${obj.id}`} height="700px" width="100%"></iframe>
                <h1>{obj.snippet.title}</h1>
                <div className="block-container__info-statistics">
            <span>{obj.statistics.viewCount} просмотров</span>
                    <Icon className="thumbs up outline"/>
            <span>{obj.statistics.likeCount}</span>
                    <Icon className="thumbs down outline"/>
            <span>{obj.statistics.dislikeCount}</span>
                </div><br/>
            <p1>{obj.snippet.description}</p1>
                <div className="block-container__comments"><ul>{commentsAll}</ul></div>
            </div>
            </Grid.Column>
            <Grid.Column width={2}>
            <div className="block-container__playlist">
                <VideoList/>
            </div>
            </Grid.Column>
            </Grid>
    )
}
export default PlayList;
