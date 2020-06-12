import React, { useEffect } from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css";
import Spinner from "../spinner/spinner";

const ListVideo = ({ state = [], fetchAllData, isLoading, isError }) => {
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Error!!</p>
      ) : (
        <ul className="block-lists">
          {state.map((item) => {
            const { id, ...itemprops } = item;
            return (
              <li key={id} className="block-container">
                <ListVideoItem id={id} {...itemprops} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ListVideo;
