import {
    GET_ALL_VIDEOS_SUCCESS,
    GET_VIDEO_SUCCESS,
    GET_VIDEO_INFO_SUCCESS,
    GET_COMMENT_VIDEO_SUCCESS,
    GET_SEARCH_VIDEO_SUCCESS,
    GET_SEARCH_WORD_SUCCESS
} from "../types/types";

const initialState={
    todos:[],
    searchVideos:[],
    comments:[],
    obj:[],
    obj2:[],
    searchWord:null
};
function reducer(state=initialState,action){
    switch (action.type) {
        case GET_ALL_VIDEOS_SUCCESS:
            return{
                ...state,
                todos:action.payload
            }
        case GET_SEARCH_VIDEO_SUCCESS:
            return{
                ...state,
                searchVideos:action.payload
            }
        case GET_COMMENT_VIDEO_SUCCESS:
            return{
                ...state,
                comments: action.payload
            }
        case GET_VIDEO_INFO_SUCCESS:
            return{
                ...state,
                obj:action.payload
            }

        case GET_VIDEO_SUCCESS:
            return{
                ...state,
                obj2:action.payload
            }



        case GET_SEARCH_WORD_SUCCESS:
            return {
                ...state,
                searchWord:action.payload

            }
        default:
            return state;
    }

}
export default  reducer;
