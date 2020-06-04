import React, {Component} from "react";
import {Link} from "react-router-dom";
const ListVideoSearchItem=({id,snippet,obj,statistics})=>{

        return(
            <div className="container-item">
                <img className="container-item__img" src={snippet.thumbnails.default.url} />
                <div className="container-item__info">
                    <p onClick={obj}><Link to={`/player/${id.videoId}`}>{snippet.title}</Link></p>
                    <p>{snippet.channelTitle}</p>
                    <p>{/*statistics.viewCount*/} просмотров</p>
                </div>
            </div>
        )

    }
    export default ListVideoSearchItem
