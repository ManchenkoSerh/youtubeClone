import {
  FETCH_VIDEO_SUCCESS,
  GET_COMMENT_VIDEO_SUCCESS,
  GET_SEARCH_WORD_SUCCESS,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_SEARCH_VIDEO_SUCCESS,
  FETCH_DATA_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../types/types";

const initialState = {
  videos: [],
  searchVideos: [],
  comments: [],
  videoInfo: [],
  searchWord: "",
  isLoading: null,
  isError: null,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_DATA_SUCCESS:
      return {
        ...state,
        videos: [...action.payload],
        isError: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isError: true,
      };
    case FETCH_SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        searchVideos: action.payload,
        isError: false,
      };
    case GET_COMMENT_VIDEO_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isError: false,
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
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default reducer;
