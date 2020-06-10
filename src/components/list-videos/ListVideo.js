import React, { useEffect } from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css";

const ListVideo = ({
  state = [],
  fetchPosts,
  getObjVideo,
  addVideos,
  token,
}) => {
  async function parseListVideo() {
    await fetchPosts();
  }
  // async function parseaddVideo() {
  //     await addVideos(token)
  // }
  // async function parseAddListVideo() {
  //     await addVideos()
  // }

  useEffect(() => {
    // else{parseListVideo()}
    parseListVideo();

    // console.log('parsec')
    // window.addEventListener("scroll",()=>{
    //     const scrolltable=document.documentElement.scrollHeight-window.innerHeight;
    //     const scrolled=window.scrollY;
    //
    //     //parseListVideo(token);
    //     if(Math.ceil(scrolled)===scrolltable){
    //         parseaddVideo(token);
    //     }
    // })
  }, []);

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
