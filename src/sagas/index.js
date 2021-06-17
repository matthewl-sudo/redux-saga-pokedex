import axios from "axios";
import { takeEvery, call, all } from "redux-saga/effects";
import {FETCH_PROFILE} from "../actionTypes"
//watcher saga
function* watchFetchProfile() {
    yield takeEvery( FETCH_PROFILE, fetchProfile);
    yield console.log('watchfetch'); 

}

//worker saga
function* fetchProfile(action) {
  try {
    yield console.log(action.payload.name); 
    const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${action.payload.name}`);
    yield console.log(response.data); 
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