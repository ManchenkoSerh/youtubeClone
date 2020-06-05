import React, {useEffect} from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";
import ListVideoItem from "../list-videos-item/ListVideoItem";



const ListVideoSearch=({state=[],getSearchVideo,getObjVideo,searchWord})=>{

    async function parseSearchVideo(){
        await getSearchVideo(searchWord)
    }
    useEffect(() => {
        parseSearchVideo(searchWord)
        console.log('parsec')
    },[searchWord])


console.log(state)
    const list=state.map((item)=>{
        const { id, ...itemprops } = item;
        return(
            <li key={id} className="block-container">
                <ListVideoSearchItem id={id+1} obj={()=>getObjVideo({...item})} {...itemprops}/>
            </li>
        )
    })
    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideoSearch;
