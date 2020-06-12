import React, { useEffect } from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";
import Spinner from "../spinner/spinner";
import {Redirect} from "react-router-dom";

const ListVideoSearch = ({
  state = [],
  getSearchVideo,
  searchWord,
  isLoading,
  isError,
}) => {
  async function parseSearchVideo() {
    await getSearchVideo(searchWord);
  }
  useEffect(() => {
    parseSearchVideo(searchWord);
  }, [searchWord]);

  return (

      (!!searchWord) ? <div>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <p>Error!!</p>
        ) : (
          <ul className="block-lists">
            {state.map((item) => {
              return (
                <li key={item.id.videoId} className="block-container">
                  <ListVideoSearchItem
                    id={item.id.videoId}
                    {...item}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div> : <Redirect to='/' />

  );
};
export default ListVideoSearch;
