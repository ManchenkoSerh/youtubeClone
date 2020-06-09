//import API from "../API/Api";
import {call,put,takeEvery} from "redux-saga/effects"
import {getAllDataSuccess} from  "../action/action"
import {ApiKey, GET_ALL_VIDEOS_SUCCESS, REQUEST_POSTS} from "../types/types";

//const _API=new API()
function* fetchTask(){
    const tasks=yield call(getAllData);
    yield put(getAllDataSuccess(tasks.items))
}
export function* watchfetchTask(){
    yield  takeEvery(REQUEST_POSTS,fetchTask)
}

async function getAllData(){
    const responce=await fetch(`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&chart=mostPopular&regionCode=US&key=${ApiKey}`)
    return await responce.json()
}
