import axios from "axios";
import { takeEvery, call, all, put } from "redux-saga/effects";
import {FETCH_PROFILE, SET_PROFILE, SET_TEXT, SET_EVOLUTION_CHAIN} from "../actionTypes";
import _ from "lodash";
import deepdash from "deepdash";

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
        // console.log('arr',arr[4])
        const evolutionUrl = yield call(axios.get, arr[4].url);
        const evoChain = evolutionUrl.data
       // why reinvent the wheel with a recursive function to iterate over a deep nested object?
       // When I can simply use lodash extended library deepdash iteratee through the object
       // _.eachDeep(obj, value, key, parentValue, context)
        let evoArray = [];
        deepdash(_).eachDeep(evoChain, (value, k, path, context, parent, parentKey, parentPath) => {
            if (value !== false && value !== null && typeof value !== 'object' && k !== 'url' && k !== '0'){
                if (k === 'name' && context.parent.key === 'species') {
                    evoArray.push(value);
                }
                // else
                // if (k) {
                //     sum.push({key:  `${context.parent.key !== '0' ? context.parent.key : ''}${k === 'name'  ? '' : k}`,value : value});
                // }
            }
        });
        // console.log('evoArray',_.reverse(evoArray));
        yield put({
            type: SET_EVOLUTION_CHAIN,
            payload: _.reverse(evoArray)
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
