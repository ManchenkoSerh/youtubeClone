import React, {useEffect} from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";
import ListVideoItem from "../list-videos-item/ListVideoItem";



const ListVideoSearch=({state=[],getSearchVideo,getObjVide,searchWord})=>{

    async function parseSearchVideo(){
        await getSearchVideo(searchWord)
    }
    useEffect(() => {
        parseSearchVideo(searchWord)
    },[searchWord])


console.log('thisstate', state, searchWord)
    /*const list=state.map((item)=>{
        const { id, ...itemprops } = item;
        return(
            <li key={id} className="block-container">
                <ListVideoSearchItem id={id+1} obj2={()=>getObjVideo({...item})} {...itemprops}/>
            </li>
        )
    })*/
    const list  = state.map( (item) => {
        const id = item.id.videoId
        return (
            <li key={item.id.videoId} className="block-container">
                <ListVideoSearchItem id={item.id.videoId} obj={ () => getObjVide({id, ...item})} {...item}/>
            </li>
        )
    })

    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideoSearch;
