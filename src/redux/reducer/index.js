import {
    FETCH_VIDEO_SUCCESS,
    GET_COMMENT_VIDEO_SUCCESS,
    GET_SEARCH_VIDEO_SUCCESS,
    GET_SEARCH_WORD_SUCCESS,
    FETCH_ALL_DATA_SUCCESS,
    GET_VIDEO_INFO_SUCCESS,
    FETCH_SEARCH_VIDEO_SUCCESS, FETCH_DATA_LOADING, FETCH_DATA_ERROR, SAVE_TOKEN_SUCCESS,
} from "../types/types";

const initialState = {
  todos: [],
  addTodos: [],
  searchVideos: [],
  comments: [],
  obj: [],
  videoInfo: [],
  searchWord: "",
  token: "",
  isLoading:null,
    isError:null
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_DATA_SUCCESS:
      return {
        ...state,
        todos:[
            ...state.todos,...action.payload
        ],
        // isLoading: false,
          isError:false

      };
    // case FETCH_DATA_LOADING:
    //   return {
    //     ...state,
    //       isLoading: true
    //   }
      case FETCH_DATA_ERROR:
          return{
              ...state,
              isError: true
          }
    case FETCH_SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        searchVideos: action.payload,
          // isLoading: false,
          // isError: false
      };
    case GET_COMMENT_VIDEO_SUCCESS:
      return {
        ...state,
        comments: action.payload,
          // isLoading: false,
          // isError: false
      };
    case GET_VIDEO_INFO_SUCCESS:
      return {
        ...state,
        obj: action.payload,
      };
    case SAVE_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        videoInfo: action.payload.items[0],
      };

    case GET_SEARCH_WORD_SUCCESS:
      return {
        ...state,
        searchWord: action.payload,
      };
      case "SHOW_LOADER":
          return {...state, isLoading: true}
      case "HIDE_LOADER":
          return {...state, isLoading: false}
    default:
      return state;
  }
}

export default  reducer;
