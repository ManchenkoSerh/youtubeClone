import React, { Component } from "react";
import "./ListVideoItem.css";
import { Link } from "react-router-dom";
export default class ListVideoItem extends Component {
  render() {
    const { snippet, statistics, id } = this.props;
    return (
      <Link to={`/player?id=${id}`}>
      <div className="container-item">
        <img
          className="container-item__img"
          src={snippet.thumbnails.standard.url}
          alt=""
        />
        <div className="container-item__info">
          <p>
            <b>{snippet.title}</b>
          </p>
          <p>{snippet.channelTitle}</p>
          <p>{statistics.viewCount} просмотров</p>
        </div>
      </div>
      </Link>
    );
  }
}
