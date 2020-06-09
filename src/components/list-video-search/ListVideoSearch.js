import React, {useEffect} from "react";
import ListVideoSearchItem from "../list-video-search-item/ListVideoSearchItem";
import ListVideoItem from "../list-videos-item/ListVideoItem";

const ListVideoSearch=({state=[],getSearchVideo,getObjVideo,searchWord,addSearchVideos})=>{

    async function parseSearchVideo(){
        await getSearchVideo(searchWord)
    }
    async function parseaddVideo() {
        await addSearchVideos(searchWord)
    }
    useEffect(() => {
        parseSearchVideo(searchWord)
        console.log('parsec')
        window.addEventListener("scroll",()=>{
            const scrolltable=document.documentElement.scrollHeight-window.innerHeight;
            const scrolled=window.scrollY;
            if(Math.ceil(scrolled)===scrolltable){
                parseaddVideo(searchWord)
            }
        })
    },[searchWord])


console.log('thisstate', state, searchWord)
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
