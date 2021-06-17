import * as types from '../actionTypes';

export const fetchProfileAction = (name) => {
    return {
        type: types.FETCH_PROFILE,
        payload: {name: name}
    }
};

export const profileFetchedAction = () =>{
    return {
        type: types.PROFILE_FETCHED
    }
}