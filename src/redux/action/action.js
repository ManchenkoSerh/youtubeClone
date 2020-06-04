import {
    GET_ALL_VIDEOS_SUCCESS,
    GET_VIDEO_SUCCESS,
    GET_ICON_CHENNAL_SUCCESS,
    GET_VIDEO_INFO_SUCCESS,
    GET_SEARCH_VIDEO_SUCCESS,
    GET_COMMENT_VIDEO_SUCCESS,
    GET_SEARCH_WORD_SUCCESS
} from "../types/types";
const ApiKey="AIzaSyCjYk7dS22esR9CGZfQ7rc5qe75W2EqSLU"
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
export const getVideoSuccess=(data)=>({
    type:GET_VIDEO_SUCCESS,
    payload:data
})
// export const getVideo=(idVideo)=>(dispatch)=>{
//     fetch(`https://www.youtube.com/watch?v=${idVideo}`)
//         .then()
// }
export const getVideo=(idVideo)=>({
    type:GET_VIDEO_INFO_SUCCESS,
        payload:idVideo
})

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
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${ApiKey}`)
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

