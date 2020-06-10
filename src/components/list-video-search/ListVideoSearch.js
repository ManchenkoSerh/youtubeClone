import React, {useEffect} from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";

const ListVideoSearch=({state=[],getVideoSearch,searchWord,addSearchVideos, addVideoIdInfo})=>{

    async function parseSearchVideo(){
        await getVideoSearch(searchWord)
    }

    async function parseaddVideo() {
        await addSearchVideos(searchWord)
    }

    useEffect(() => {
        parseSearchVideo(searchWord)
        window.addEventListener("scroll",()=>{
            const scrolltable=document.documentElement.scrollHeight-window.innerHeight;
            const scrolled=window.scrollY;
            if(Math.ceil(scrolled)===scrolltable){
                parseaddVideo(searchWord)
            }
        })
    },[searchWord])

    const list  = state.map( (item) => {
        return (
            <li key={item.id.videoId} className="block-container">
                <ListVideoSearchItem id={item.id.videoId} videoIdHandler={(id)=>addVideoIdInfo(id)} {...item}/>
            </li>
        )
    })

    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideoSearch;