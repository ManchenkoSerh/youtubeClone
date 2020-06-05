import React,{ useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { TrendingListItem } from '../trending-list-item/TrendingListItem'

export const TrendingListVideo = ({state=[],getList,getObjVide}) => {
    async function parseListVideo() {
        await getList()
    }
    useEffect(() => {
        parseListVideo()
    }, [])

    const list = state.map( (item) => {
        const { id, ...itemprops } = item;
        return <TrendingListItem key={item.id} id={id} obj={()=>getObjVide({...item})} {...itemprops} />
    })

    return (
        <Grid>{list}</Grid>
    )
}
