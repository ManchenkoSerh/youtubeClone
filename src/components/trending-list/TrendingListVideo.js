import React,{ useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { TrendingListItem } from '../trending-list-item/TrendingListItem'

export const TrendingListVideo = ({state=[],getList,getObjVide,addVideos}) => {
    async function parseListVideo() {
        await getList()
    }
    async function parseAddVideo() {
        await addVideos()
    }
    useEffect(() => {
        parseListVideo();
        window.addEventListener("scroll",()=>{
            const scrolltable=document.documentElement.scrollHeight-window.innerHeight;
            const scrolled=window.scrollY;
            if(Math.ceil(scrolled)===scrolltable){
                parseAddVideo()
            }
        })
    }, [])

    const list = state.map( (item) => {
        const { id, ...itemprops } = item;
        return <TrendingListItem key={item.id} id={id} obj={()=>getObjVide({...item})} {...itemprops} />
    })

    return (
        <Grid>{list}</Grid>
    )
}
