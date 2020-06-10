import React, {useEffect} from "react";
import "./Playlist.css"
import { Grid } from 'semantic-ui-react';
import VideoList from "../../containers/video-list/VideoList"
import CommentsItem from "../comments-item/CommentsItem"

const PlayList = (props) => {
    console.log(props)
    // async function parseComments() {
    //     await props.getComments(props.aboutVideo.id)
    // }

    // useEffect(() => {
    //     parseComments()
    // },[])

    //const commentsAll=props.comments.map((item)=>{
        //console.log(item)
        // return(
        //     <li key={id}>
        //         <CommentsItem {...itemprops} /*getIcon={()=>getIconChennal(snippet.topLevelComment.authorChannelId.value)}*//>
        //     </li>
        // )
    //})

    return(
            <Grid>
                <Grid.Column width={12}>
            <div className="block-container__playlist-info">
            <iframe src={`https://youtube.com/embed/${props.aboutVideo.id}`}
                    height="700px"
                    width="100%"
                    title={props.aboutVideo.id} />
                <h1>{props.snippet.title}</h1>
                {/*<div className="block-container__comments"><ul>{commentsAll}</ul></div>*/}
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
