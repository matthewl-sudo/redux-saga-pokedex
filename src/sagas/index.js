import axios from "axios";
import { takeEvery, call } from "redux-saga/effects"; 

//watcher saga
export function* watchFetchProfile() {
    yield takeEvery( "FETCH_PROFILE", fetchProfile);
    yield console.log('response'); 

}
//worker saga
function* fetchProfile() {
    const response = yield call(axios.get, "https://pokeapi.co/api/v2/pokemon/1");
    yield console.log(response); 
} 