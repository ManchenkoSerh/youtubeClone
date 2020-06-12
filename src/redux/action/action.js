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
  FETCH_VIDEO_REQUEST,
  FETCH_DATA_ERROR,
  SAVE_TOKEN_SUCCESS,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../types/types";

export const getAllDataSuccess = (data) => ({
  type: FETCH_ALL_DATA_SUCCESS,
  payload: data,
});

export const getAllData = (token) => ({
  type: FETCH_ALL_DATA_REQUEST,
  payload: token,
});

export const fetchDataLoading = () => ({ type: SHOW_LOADER });
export const fetchDataLoadinghide = () => ({ type: HIDE_LOADER });
export const fetchDataError = () => ({ type: FETCH_DATA_ERROR });

export const getObjectVideo = (data) => ({
  type: GET_VIDEO_INFO_SUCCESS,
  payload: data,
});

export const fetchVideoSuccess = (idVideo) => ({
  type: FETCH_VIDEO_SUCCESS,
  payload: idVideo,
});

export const fetchVideo = (idVideo) => ({
  type: FETCH_VIDEO_REQUEST,
  payload: idVideo,
});

export const keyWord = (word) => ({
  type: GET_SEARCH_WORD_SUCCESS,
  payload: word,
});

export const fetchSearchVideoSuccess = (data) => ({
  type: FETCH_SEARCH_VIDEO_SUCCESS,
  payload: data,
});

export const fetchVideoSearch = (query) => ({
  type: FETCH_SEARCH_VIDEO_REQUEST,
  payload: query,
});

export const fetchCommentsSuccess = (data) => ({
  type: GET_COMMENT_VIDEO_SUCCESS,
  payload: data,
});

export const fetchComments = (idChennal) => ({
  type: GET_COMMENT_VIDEO_REQUEST,
  payload: idChennal,
});

export const SaveToken = (data) => ({
  type: SAVE_TOKEN_SUCCESS,
  payload: data,
});
