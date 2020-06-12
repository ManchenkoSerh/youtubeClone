import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import data from "../reducer/dataReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    data,
  compose(
    applyMiddleware(sagaMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
export default store;
