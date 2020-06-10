import {
    GET_ALL_VIDEOS_SUCCESS,
    GET_VIDEO_SUCCESS,
    GET_ICON_CHENNAL_SUCCESS,
    GET_VIDEO_INFO_SUCCESS,
    GET_SEARCH_VIDEO_SUCCESS,
    GET_COMMENT_VIDEO_SUCCESS,
    GET_SEARCH_WORD_SUCCESS,
    GET_VIDEO_ID,
    ApiKey,
    URL
} from "../types/types";

export const getAllDataSuccess=(data)=>({
    type:GET_ALL_VIDEOS_SUCCESS,
    payload:data
})
export const getAllData=()=>(dispatch)=>{
    fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=5&chart=mostPopular&regionCode=US&key=${ApiKey}`, {
        })
        .then((res)=>res.json())
        .then(res=>{console.log(res);
            dispatch(SaveToken(res.nextPageToken));
            dispatch(getAllDataSuccess(res.items))
        })
}
export const getVide=(data)=>({
    type:GET_VIDEO_INFO_SUCCESS,
    payload:data
})

export const getVideoSuccess=(idVideo)=>({
    type:GET_VIDEO_SUCCESS,
        payload:idVideo
})
export const getVideo=(idVideo)=>(dispatch)=>{
    fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idVideo.id.videoId}&key=${ApiKey}`)
        .then(res=>res.json())
        .then(res=>{dispatch(getVideoSuccess(res))})
}

/**
 * Youtube Search Video API
 *
 */
export const keyWord=(word)=>({
    type:GET_SEARCH_WORD_SUCCESS,
    payload:word
})
export const getSearchVideoSuccess=(data)=>({
    type:GET_SEARCH_VIDEO_SUCCESS,
    payload:data
})

export const getVideoSearch = (query) => (dispatch) => {
    fetch(`${URL}/search?part=snippet&maxResults=5&q=${query}&type=video&key=${ApiKey}`)
    .then((res) => res.json())
    .then((res) => dispatch(getSearchVideoSuccess(res.items)))
}
export const getCommentsSuccess=(data)=>({
    type:GET_COMMENT_VIDEO_SUCCESS,
    payload:data
})
export const getComments=(idChennal)=>(dispatch)=>{
    fetch(`${URL}/commentThreads?part=snippet%2Creplies&videoId=${idChennal}&key=${ApiKey}`)
        .then(res=>res.json())
        .then((res) => dispatch(getCommentsSuccess(res)))
}



export const addVideosSuccess=(data)=>({
    type:"ADD_VIDEO_SUCCESS",
    payload:data
})
export const SaveToken=(data)=>({
    type:"SAVE_TOKEN_SUCCESS",
    payload:data
})
export const addVideos=(nextToken)=>(dispatch)=>{

    fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&pageToken=${nextToken}&regionCode=US&key=${ApiKey}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);debugger;dispatch(SaveToken(res.nextPageToken));
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

export const addVideoID = (data) => ({
    type: GET_VIDEO_ID,
    payload: data
})
export const addVideoIdInfo = (id) => (dispatch) => {
    fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${ApiKey}`)
        .then(res=>res.json())
        .then(res=>dispatch(addVideoID(res.items)))
}