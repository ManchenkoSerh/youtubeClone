import React, { useEffect } from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import Spinner from "../spinner/spinner";

const ListVideoSearch=({state=[],getSearchVideo,getObjVideo,searchWord,loading})=>{

     function parseSearchVideo(){
         getSearchVideo(searchWord)
    }
    useEffect(() => {

            parseSearchVideo(searchWord);
            console.log("parsec");
            window.addEventListener("scroll", () => {
                const scrolltable =
                    document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = window.scrollY;
                if (Math.ceil(scrolled) === scrolltable) {
                    console.log("AAA");
                    parseSearchVideo(searchWord);
                }
            });

    },[searchWord])

if(loading){
    return <Spinner/>
}
console.log('thisstate', state, searchWord)
    const list  = state.map( (item) => {
        const id = item.id.videoId
        return (
            <li key={item.id.videoId} className="block-container">
                <ListVideoSearchItem id={item.id.videoId} obj={ () => getObjVideo({id, ...item})} {...item}/>
            </li>
        )
    })

    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideoSearch;
