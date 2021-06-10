import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"; 
import combineReducers from "./reducers";
import logger from "redux-logger";
import { watchFetchProfile } from "./sagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    combineReducers,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(watchFetchProfile);


export default store;