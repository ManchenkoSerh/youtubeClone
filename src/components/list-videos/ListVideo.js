import React, { useEffect } from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import Spinner from "../spinner/spinner"
import "./ListVideo.css";

const ListVideo = ({
  state = [],
  fetchAllData,
  getObjVideo,
  addVideos,
  token,
  loading,error
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

   if(loading){
     return <Spinner className="spinner-component"/>
   }
   else if(error){
     return <p>error!</p>
   }

  console.log(state);
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
