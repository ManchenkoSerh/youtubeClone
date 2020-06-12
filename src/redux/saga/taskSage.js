import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllDataSuccess,
  fetchVideoSuccess,
  fetchSearchVideoSuccess,
  fetchCommentsSuccess,
  SaveToken,
  fetchDataLoading,
  fetchDataError,
  fetchDataLoadinghi,
  fetchDataLoadinghide,
} from "../action/action";
import {
  FETCH_ALL_DATA_REQUEST,
  FETCH_VIDEO_REQUEST,
  FETCH_SEARCH_VIDEO_REQUEST,
  GET_COMMENT_VIDEO_REQUEST,
} from "../types/types";
import Api from "../API/Api";

export function* watchfetchTask() {
  yield takeEvery(FETCH_ALL_DATA_REQUEST, fetchTask);
}
export function* watchfetchInfo() {
  yield takeEvery(FETCH_VIDEO_REQUEST, fetchInfo);
}
export function* watchVideoSearch() {
  yield takeEvery(FETCH_SEARCH_VIDEO_REQUEST, fetchSearchVideo);
}
export function* watchCommentsVideo() {
  yield takeEvery(GET_COMMENT_VIDEO_REQUEST, fetchCommentsVideo);
}
const API = new Api();
function* fetchTask(token) {
  try {
    //yield put(fetchDataLoading());
    const payload = yield call(API.getDate, token.payload);
    debugger;
    yield put(SaveToken(payload.nextPageToken));
    yield put(getAllDataSuccess(payload.items));
    //yield put(fetchDataLoadinghide());
  } catch (e) {
    //yield put(fetchDataError());
  }
}
function* fetchInfo(idVideo) {
  //yield put(fetchDataLoading());
  const res = yield call(API.getInfoVideo, idVideo.payload);
  yield put(fetchVideoSuccess(res));
}
function* fetchSearchVideo(query) {
  try {
    //yield put(fetchDataLoading());
    const res = yield call(API.getSearchVideo, query.payload);
    yield put(fetchSearchVideoSuccess(res.items));
    //yield put(fetchDataLoadinghide());
  } catch (e) {
    //yield put(fetchDataError());
  }
}
function* fetchCommentsVideo(idChennal) {
  try {
    //yield put(fetchDataLoading());
    const res = yield call(API.getCommentsVideo, idChennal.payload);
    yield put(fetchCommentsSuccess(res.items));
    //yield put(fetchDataLoadinghide());
  } catch (e) {
    //yield put(fetchDataError());
  }
}
