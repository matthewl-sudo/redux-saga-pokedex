import { combineReducers } from "redux";
import { FETCH_PROFILE, SET_PROFILE } from "../actionTypes"

const initialState = {name: ''}

export function fetchProfileReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PROFILE:
        // console.log('FETCHED', state, action.payload);
        return {...state, name: action.payload.name};
      case SET_PROFILE:
        console.log('SET', action.payload)
        return {...state, info: action.payload}
      default:
        return state;
    }
}
export default combineReducers({
    pokemon: fetchProfileReducer,
});
