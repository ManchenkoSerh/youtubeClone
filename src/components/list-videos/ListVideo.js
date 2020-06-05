import React, {useEffect} from "react";
import ListVideoItem from "../list-videos-item/ListVideoItem";
import "./ListVideo.css"

const ListVideo=({state=[],getList,getObjVide})=>{
    async function parseListVideo() {
        await getList()
    }

        useEffect(() => {
            parseListVideo()
            console.log('parsec')
        }, [])




    const listenScrollEvent=()=>{
        console.log('Scroll event detected!');
    }
    //console.log('state list vide',state);
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
        <div onScroll={()=>console.log("ssssss")}>
        <ul className="block-lists">{list}</ul>
        </div>
    )
}
export default ListVideo;
