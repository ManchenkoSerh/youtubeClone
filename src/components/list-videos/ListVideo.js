import React, {useEffect} from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css"

const ListVideo=({state=[],getList,getObjVide,addVideos,token})=>{
    async function parseListVideo() {
        await getList()
    }
    async function parseaddVideo() {
        await addVideos(token)
    }
    // async function parseAddListVideo() {
    //     await addVideos()
    // }

        useEffect(() => {
            parseListVideo()
            console.log('parsec')
            window.addEventListener("scroll",()=>{
                const scrolltable=document.documentElement.scrollHeight-window.innerHeight;
                const scrolled=window.scrollY;
                if(Math.ceil(scrolled)===scrolltable){
                    console.log(token)
                    parseaddVideo(token)
                }
            })
        }, [])

console.log(state)
    const list=state.map((item)=>{
        const { id, ...itemprops } = item;
        //console.log(item);
        return(
            <li key={id} className="block-container">
                <ListVideoItem id={id} obj={()=>getObjVide({...item})} {...itemprops}/>
            </li>
        )
    })
    return(
        <div >
        <ul className="block-lists">{list}</ul>
        </div>
    )
}
export default ListVideo;
