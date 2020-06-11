import React,{ useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { TrendingListItem } from '../trending-list-item/TrendingListItem'
import Spinner from "../spinner/spinner";

export const TrendingListVideo = ({state=[],fetchAllData,getObjVideo,addVideos,loading}) => {
    function parseListVideo() {
         fetchAllData()
    }

    useEffect(() => {
        parseListVideo();
    }, [])
    if(loading){
        return <Spinner/>
    }
    const list = state.map( (item) => {
        const { id, ...itemprops } = item;
        console.log(item)
        return <TrendingListItem key={item.id} id={id} obj={()=>getObjVideo({...item})} {...itemprops} />
    })

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
