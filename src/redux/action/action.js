import {
    FETCH_ALL_DATA_SUCCESS,
    FETCH_VIDEO_SUCCESS,
    FETCH_ALL_DATA_REQUEST,
    GET_VIDEO_INFO_SUCCESS,
    FETCH_SEARCH_VIDEO_REQUEST,
    FETCH_SEARCH_VIDEO_SUCCESS,
    GET_COMMENT_VIDEO_SUCCESS,
    GET_COMMENT_VIDEO_REQUEST,
    GET_SEARCH_WORD_SUCCESS,
    ApiKey,
    URL,
    FETCH_VIDEO_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_WAITING
} from "../types/types";

export const fetchAllDataSuccess=(data)=>({
    type:FETCH_ALL_DATA_SUCCESS,
    payload:data
})
export const fetchDataError=(error)=>({type:FETCH_DATA_ERROR,error})
export const fetchAllData=(token)=>({type: FETCH_ALL_DATA_REQUEST,payload:token})

export const getObjectVideo=(data)=>({
    type:GET_VIDEO_INFO_SUCCESS,
    payload:data
})
export const fetchVideoSuccess=(idVideo)=>({
    type:FETCH_VIDEO_SUCCESS,
        payload:idVideo
})
export const fetchVideo=(idVideo)=>({type: FETCH_VIDEO_REQUEST,payload:idVideo})

export const keyWord=(word)=>({
    type:GET_SEARCH_WORD_SUCCESS,
    payload:word
})
export const fetchSearchVideoSuccess=(data)=>({
    type:FETCH_SEARCH_VIDEO_SUCCESS,
    payload:data
})
export const fetchVideoSearch=(query)=>({type:FETCH_SEARCH_VIDEO_REQUEST,payload:query})

export const fetchCommentsSuccess=(data)=>({
    type:GET_COMMENT_VIDEO_SUCCESS,
    payload:data
})
export const fetchComments=(idChennal)=>({type:GET_COMMENT_VIDEO_REQUEST,payload:idChennal})


//******************************************************
export const addVideosSuccess=(data)=>({
    type:"ADD_VIDEO_SUCCESS",
    payload:data
})
export const SaveToken=(data)=>({
    type:"SAVE_TOKEN_SUCCESS",
    payload:data
})
export const DelToken=()=>({
    type:"DEL_TOKEN"
})
export const addVideos=(nextToken)=>(dispatch)=>{

    fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&chart=mostPopular&pageToken=${nextToken}&regionCode=US&key=${ApiKey}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);dispatch(SaveToken(res.nextPageToken));
        dispatch(addVideosSuccess(res.items));

    })
}

export const addSearchSuccess=(data)=>({
    type:"ADD_VIDEO_SEARCH_SUCCESS",
    payload:data
})
export const addSearchVideos=(query)=>(dispatch)=>{
    fetch(`${URL}/search?part=snippet&maxResults=5&q=${query}&key=${ApiKey}`)
        .then(res=>res.json())
        .then(res=>dispatch(addSearchSuccess(res.items)))
}
