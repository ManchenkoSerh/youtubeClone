import {createStore, applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/index";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware=createSagaMiddleware();
const store=createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware,thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

sagaMiddleware.run(rootSaga)
export default store;
