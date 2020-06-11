import {all} from "redux-saga/effects"
import {
    watchfetchTask,
    watchfetchInfo,
    watchVideoSearch,
    watchCommentsVideo
} from "./taskSage";

export default function* rootSaga(){
    yield all([
        watchfetchTask(),
        watchfetchInfo(),
        watchVideoSearch(),
        watchCommentsVideo()
    ])
}
