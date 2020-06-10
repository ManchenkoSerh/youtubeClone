import {
  FETCH_VIDEO_SUCCESS,
  GET_COMMENT_VIDEO_SUCCESS,
  GET_SEARCH_VIDEO_SUCCESS,
  GET_SEARCH_WORD_SUCCESS,
  FETCH_ALL_DATA_SUCCESS,
  GET_VIDEO_INFO_SUCCESS,
  FETCH_SEARCH_VIDEO_SUCCESS,
} from "../types/types";

const initialState = {
  todos: [],
  addTodos: [],
  searchVideos: [],
  comments: [],
  obj: [],
  obj2: [],
  searchWord: "",
  token: "",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_DATA_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        searchVideos: action.payload,
      };
    case GET_COMMENT_VIDEO_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_VIDEO_INFO_SUCCESS:
      return {
        ...state,
        obj: action.payload,
      };
    case "SAVE_TOKEN_SUCCESS":
      return {
        ...state,
        token: action.payload,
      };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        obj2: action.payload,
      };

    case GET_SEARCH_WORD_SUCCESS:
      return {
        ...state,
        searchWord: action.payload,
      };
    case "ADD_VIDEO_SUCCESS":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    case "ADD_VIDEO_SEARCH_SUCCESS":
      return {
        ...state,
        searchVideos: [...state.searchVideos, ...action.payload],
      };
    default:
      return state;
  }
}
export default  reducer;
