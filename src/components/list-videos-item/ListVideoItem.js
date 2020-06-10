import React, {Component} from "react";
import "./ListVideoItem.css"
import {Link} from "react-router-dom";
export default class ListVideoItem extends Component{

    render(){
        const {snippet,statistics,id,obj}=this.props;
        return(
            <div className="container-item">
                <img className="container-item__img" src={snippet.thumbnails.default.url} alt=''/>
                <div className="container-item__info">
                    <p onClick={obj}><Link to={`/player/${id}`}>{snippet.title}</Link></p>
                <p>{snippet.channelTitle}</p>
                <p>{statistics.viewCount} просмотров</p>
                </div>
            </div>
        )

    }

}
