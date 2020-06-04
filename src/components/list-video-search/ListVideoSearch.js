import React, {useEffect} from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";

const query = 'fortnite'

const ListVideo=({state=[],getSearchVideo,searchWord})=>{
    useEffect(() => {
        const timer = window.setTimeout(() => {
            console.log(searchWord)
            getSearchVideo(searchWord);
        }, 1000);
        return () => {
            // Return callback to run on unmount.
            window.clearInterval(timer);
        };
    }, []);


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
