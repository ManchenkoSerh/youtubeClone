import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { TrendingListItem } from "../trending-list-item/TrendingListItem";

export const TrendingListVideo = ({
  state = [],
  getList,
  getObjVideo,
  addVideos,
}) => {
  async function parseListVideo() {
    await getList();
  }
  async function parseAddVideo() {
    await addVideos();
  }
  useEffect(() => {
    parseListVideo();
    // window.addEventListener("scroll",()=>{
    //     const scrolltable=document.documentElement.scrollHeight-window.innerHeight;
    //     const scrolled=window.scrollY;
    //     if(Math.ceil(scrolled)===scrolltable){
    //         parseAddVideo()
    //     }
    // })
  }, []);

  const list = state.map((item) => {
    const { id, ...itemprops } = item;
    console.log(item);
    return (
      <TrendingListItem
        key={item.id}
        id={id}
        obj={() => getObjVideo({ ...item })}
        {...itemprops}
      />
    );
  });

  return <Grid>{list}</Grid>;
};
