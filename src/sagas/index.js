import axios from "axios";
import { takeEvery, call, all, put } from "redux-saga/effects";
import {FETCH_PROFILE, SET_PROFILE, SET_TEXT} from "../actionTypes";
import _ from "lodash";
//watcher saga
function* watchFetchProfile() {
    yield takeEvery( FETCH_PROFILE, fetchProfile);
    yield takeEvery( FETCH_PROFILE, fetchText);
}

//worker saga
function* fetchProfile(action) {
  try {
    // yield console.log(action.payload.name);
    const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${action.payload.name}`);
    const arr = _.values(response.data)
    // yield console.log(arr[2][0].name);
    yield put({
        type: SET_PROFILE,
        payload: arr
    })
  }
  catch (error) {
    console.log(error);
  }
}

//worker saga
function* fetchText(action) {
  try {
    const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon-species/${action.payload.name}`);
    const arr = _.values(response.data)
    // yield console.log(arr);
    yield put({
        type: SET_TEXT,
        payload: arr
    })
  }
  catch (error) {
    console.log(error);
  }
}  

export default function* rootSaga() {
    yield all([
      watchFetchProfile(),
    ])
  }
