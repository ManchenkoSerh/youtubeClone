import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './TrendingListItem.css'

export const TrendingListItem = ({snippet,statistics,id,obj}) => {
    return (
        <Grid.Row>
            <img src={snippet.thumbnails.medium.url} alt='VideoImage' />
            <div>
            <Link to={`/player/${id}`}><div>{snippet.title}</div></Link>
                <div>{statistics.viewCount} views</div>
            </div>
        </Grid.Row>
    )
}