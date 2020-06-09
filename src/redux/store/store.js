import {createStore, applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/index";
import {watchfetchTask} from "../saga/taskSage";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware=createSagaMiddleware();
const store=createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware,thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

sagaMiddleware.run(watchfetchTask)
export default store;
