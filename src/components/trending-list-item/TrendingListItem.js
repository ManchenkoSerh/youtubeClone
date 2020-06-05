import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './TrendingListItem.css'

export const TrendingListItem = ({snippet,statistics,id,obj}) => {
    return (
        <Grid.Row>
            <img src={snippet.thumbnails.medium.url} alt='VideoImage' />
            <div>
                <div onClick={obj}><Link to={`/player/${id}`}>{snippet.title}</Link></div>
                <div>{statistics.viewCount} views</div>
            </div>
        </Grid.Row>
    )
}
