import { combineReducers } from "redux";
import { FETCH_PROFILE } from "../actionTypes"

const initialState = {
  1: [{id: 1, name: 'Bulbasaur', type: ' Grass'}],
 25: [{id: 25, name: 'Pikachu', type: 'Electric'}],
 151: [{id: 151, name: 'Mew', type: 'Psychic'}]
}

export function fetchProfileReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PROFILE:
        console.log('FETCHED');
        return [...state];
    
      default:
        return state;
    }
}
export default combineReducers({
    fetchProfileReducer,
});
