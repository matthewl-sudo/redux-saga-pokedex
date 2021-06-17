import { combineReducers } from "redux";
import { FETCH_PROFILE } from "../actionTypes"

const initialState = {name: ''}

export function fetchProfileReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PROFILE:
        // console.log('FETCHED', state, action.payload);
        return {...state, name: action.payload.name};
    
      default:
        return state;
    }
}
export default combineReducers({
    pokemon: fetchProfileReducer,
});
