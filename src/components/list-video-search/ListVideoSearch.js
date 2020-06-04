import React, {useEffect} from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";



const ListVideo=({state=[],getSearchVideo,searchWord})=>{

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
            <li key={id+1} className="block-container">
                <ListVideoSearchItem id={id} {...itemprops}/>
            </li>
        )
    })
    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideo;
