import {
  FETCH_ALL_DATA_SUCCESS,
  FETCH_VIDEO_SUCCESS,
  FETCH_ALL_DATA_REQUEST,
  FETCH_SEARCH_VIDEO_REQUEST,
  FETCH_SEARCH_VIDEO_SUCCESS,
  GET_COMMENT_VIDEO_SUCCESS,
  GET_COMMENT_VIDEO_REQUEST,
  GET_SEARCH_WORD_SUCCESS,
  FETCH_VIDEO_REQUEST,
  FETCH_DATA_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../types/types";

/**
 * Action creator get videos for trending and main pages
 * */
export const getAllDataSuccess = (data) => ({
  type: FETCH_ALL_DATA_SUCCESS,
  payload: data,
});

export const getAllData = () => ({
  type: FETCH_ALL_DATA_REQUEST,
});

/**
 * Action creator for loading and error
 * */
export const fetchDataLoading = () => ({ type: SHOW_LOADER });
export const fetchDataLoadinghide = () => ({ type: HIDE_LOADER });
export const fetchDataError = () => ({ type: FETCH_DATA_ERROR });

/**
 * Action creator for videoInfo
 * */
export const fetchVideoSuccess = (idVideo) => ({
  type: FETCH_VIDEO_SUCCESS,
  payload: idVideo,
});

export const fetchVideo = (idVideo) => ({
  type: FETCH_VIDEO_REQUEST,
  payload: idVideo,
});

/**
 * Action creator for search
 * */
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

/**
 * Action creator for comments
 * */
export const fetchCommentsSuccess = (data) => ({
  type: GET_COMMENT_VIDEO_SUCCESS,
  payload: data,
});

export const fetchComments = (idChennal) => ({
  type: GET_COMMENT_VIDEO_REQUEST,
  payload: idChennal,
});