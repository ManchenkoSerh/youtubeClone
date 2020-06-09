import {
    GET_ALL_VIDEOS_SUCCESS,
    GET_VIDEO_SUCCESS,
    GET_ICON_CHENNAL_SUCCESS,
    GET_VIDEO_INFO_SUCCESS,
    GET_SEARCH_VIDEO_SUCCESS,
    GET_COMMENT_VIDEO_SUCCESS,
    GET_SEARCH_WORD_SUCCESS
} from "../types/types";
const ApiKey="AIzaSyB0-zxYRTVmPCkuX3dGHUYr-tUIuJbsicc"
export const getAllDataSuccess=(data)=>({
    type:GET_ALL_VIDEOS_SUCCESS,
    payload:data
})
export const getAllData=()=>(dispatch)=>{
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=20&chart=mostPopular&regionCode=US&key=${ApiKey}`, {
        })
        .then((res)=> res.json())
        .then(res=>dispatch(getAllDataSuccess(res)))
}
export const getVide=(data)=>({
    type:GET_VIDEO_INFO_SUCCESS,
    payload:data
})
// export const getVideo=(idVideo)=>(dispatch)=>{
//     fetch(`https://www.youtube.com/watch?v=${idVideo}`)
//         .then()
// }
export const getVideoSuccess=(idVideo)=>({
    type:GET_VIDEO_SUCCESS,
        payload:idVideo
})
export const getVideo=(idVideo)=>(dispatch)=>{
    debugger
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idVideo.id.videoId}&key=${ApiKey}`)
        .then(res=>{debugger;res.json()})
        .then(res=>dispatch(getVideoSuccess(res)))
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
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${ApiKey}`)
    .then((res) => res.json())
    .then((res) => dispatch(getSearchVideoSuccess(res)))
}
export const getCommentsSuccess=(data)=>({
    type:GET_COMMENT_VIDEO_SUCCESS,
    payload:data
})
export const getComments=(idChennal)=>(dispatch)=>{
    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${idChennal}&key=${ApiKey}`)
        .then(res=>res.json())
        .then((res) => dispatch(getCommentsSuccess(res)))
}

