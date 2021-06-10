import * as types from '../actionTypes';

export const fetchProfileAction = () => {
    return {
        type: types.FETCH_PROFILE
    }
};

export const profilFetchedAction = () =>{
    return {
        type: types.PROFILE_FETCHED
    }
}