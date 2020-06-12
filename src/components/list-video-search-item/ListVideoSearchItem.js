import React from "react";
import { Link } from "react-router-dom";
const ListVideoSearchItem = ({ id, snippet }) => {
  return (
    <Link to={`/player?id=${id.videoId}`}>
    <div className="container-item">
      <img
        className="container-item__img"
        src={snippet.thumbnails.high.url}
        alt=''
      />
      <div className="container-item__info">
        <p>
          {snippet.title}
        </p>
        <p>{snippet.channelTitle}</p>
      </div>
    </div>
    </Link>
  );
};
export default ListVideoSearchItem;
