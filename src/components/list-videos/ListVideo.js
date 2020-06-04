import React, {useEffect} from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css"

const ListVideo=({state=[],getList,getObjVideo})=>{
    async function parseListVideo() {
        await getList()
    }

        useEffect(() => {
            parseListVideo()
            console.log('parsec')
        },[])


    //console.log('state list vide',state);
    const list=state.map((item)=>{
        const { id, ...itemprops } = item;
        //console.log(item);
        return(
            <li key={id} className="block-container">
                <ListVideoItem id={id} obj={()=>getObjVideo({...item})} {...itemprops}/>
            </li>
        )
    })
    return(
        <ul className="block-lists">{list}</ul>
    )
}
export default ListVideo;
