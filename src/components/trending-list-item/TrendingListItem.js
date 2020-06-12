import React from "react";
import {Container, Grid} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./TrendingListItem.scss";

export const TrendingListItem = ({ snippet, statistics, id }) => {
  const viewToMil = () => {
    let startVal = statistics.viewCount
    let val = startVal.slice(0, -5).split('')
    val.splice(-1,0, ',')
    return (val.join('') + ' млн. ')
  }

  return (
    <Link to={`/player?id=${id}`}>
    <Container>
      <Grid.Row className='rowStyle'>
        <img src={snippet.thumbnails.medium.url} alt="VideoImage" />
        <div className='textMargin'>
          <div className='titleStyle'>
            {snippet.title}
          </div>
          <p><span>{snippet.channelTitle}</span> • {statistics.viewCount > 1e6 ? viewToMil() : statistics.viewCount + ' тысяч '} просмотров</p>
          <p>{snippet.description.slice(0,512)}...</p>
        </div>
      </Grid.Row>
    </Container>
    </Link>
  );
};
