import React, { useEffect } from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css";

const ListVideo = ({
  state = [],
  fetchAllData,
  getObjVideo,
  addVideos,
  token,
}) => {
  async function parseListVideo() {
    await fetchAllData(token);
  }

  useEffect(() => {
    if (token == "") {
      parseListVideo(token);
    } else {
      console.log("parsec");
      window.addEventListener("scroll", () => {
        const scrolltable =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if (Math.ceil(scrolled) === scrolltable) {
          console.log("AAA");
          parseListVideo(token);
        }
      });
    }
  }, [token]);

  const list = state.map((item) => {
    const { id, ...itemprops } = item;
    //console.log('needed item info', item);
    return (
      <li key={id} className="block-container">
        <ListVideoItem
          id={id}
          obj={() => getObjVideo({ ...item })}
          {...itemprops}
        />
      </li>
    );
  });
  return (
    <div>
      <ul className="block-lists">{list}</ul>
    </div>
  );
};
export default ListVideo;
