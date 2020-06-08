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


console.log(state)
    const list=state.map((item)=>{
        const { id, ...itemprops } = item;
        return(
            <li key={id} className="block-container">
                <ListVideoSearchItem id={id+1} obj2={()=>getObjVideo({...item})} {...itemprops}/>
            </li>
        )
    })
    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideoSearch;
