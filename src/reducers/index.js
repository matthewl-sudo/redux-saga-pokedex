import { combineReducers } from "redux";
import { FETCH_PROFILE, SET_PROFILE, SET_TEXT } from "../actionTypes"

const initialState = {name: '', isLoading: true}

export function fetchProfileReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PROFILE:
        // console.log('FETCHED', state, action.payload);
        return {...state, name: action.payload.name};
      case SET_PROFILE:
        console.log('set_profile_reducer', action.payload)
        return {...state, info: action.payload, isLoading: false}
      case SET_TEXT:
        console.log('set_text-reducer', action.payload)
        return {...state, text: action.payload, isLoading: false}
      default:
        return state;
    }
}
export default combineReducers({
    pokemon: fetchProfileReducer,
});
