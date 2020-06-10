import React from "react";
import {Link} from "react-router-dom";
const ListVideoSearchItem=(props)=>{
    console.log('hehe',props.id.videoId)

    async function getVideoInfo() {
        await props.videoIdHandler(props.id.videoId)
    }

    return(
        <div className="container-item" >
            <img className="container-item__img" src={props.snippet.thumbnails.default.url} />
            <div className="container-item__info">
                <p onClick={getVideoInfo}><Link to={`/player/${props.id.videoId}`}>{props.snippet.title}</Link></p>
                <p>{props.snippet.channelTitle}</p>
            </div>
        </div>
    )
}
export default ListVideoSearchItem
