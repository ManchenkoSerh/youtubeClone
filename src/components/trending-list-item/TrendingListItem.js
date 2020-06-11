import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './TrendingListItem.css'

export const TrendingListItem = ({snippet,statistics,id,obj}) => {
    return (
        <Grid.Row>
            <img onClick={obj} src={snippet.thumbnails.standard.url} alt='VideoImage'/>
            <div>
                <div onClick={obj}><Link to={`/player/${id}`}>{snippet.title}</Link></div>
                <span>{snippet.channelTitle}</span>
                <p>{statistics.viewCount} просмотров</p>
            </div>
        </Grid.Row>
    )
}
