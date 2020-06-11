import {call,put,takeEvery} from "redux-saga/effects"
import {
    getAllDataSuccess,
    fetchVideoSuccess,
    fetchSearchVideoSuccess,
    fetchCommentsSuccess,
    SaveToken, DelToken, fetchAllDataSuccess, fetchDataError
} from "../action/action"
import {
  getAllDataSuccess,
  fetchVideoSuccess,
  fetchSearchVideoSuccess,
  fetchCommentsSuccess,
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
const API=new Api()
function* fetchTask(nextToken){
    try{
        const payload=yield call(API.getData,nextToken.payload);
        yield  put(SaveToken(payload.nextPageToken))
        yield put(fetchAllDataSuccess(payload.items))
    }catch (e) {
        yield put(fetchDataError(e))
    }

   // localStorage.setItem("token",payload.nextPageToken)
}
function* fetchInfo(idVideo) {
  const res = yield call(API.getInfoVideo, idVideo.payload);
  yield put(fetchVideoSuccess(res));
}
function* fetchSearchVideo(query) {
  const res = yield call(API.getSearchVideo, query.payload);
  yield put(fetchSearchVideoSuccess(res.items));
}
function* fetchCommentsVideo(idChennal) {
  const res = yield call(API.getCommentsVideo, idChennal.payload);
  yield put(fetchCommentsSuccess(res.items));
}
