import {START_USERS_LOADING,STOP_USERS_LOADING,SET_USERS,USERS_ERROR} from '../action-types'
const initialState = {
    users: [],
    isUsersLoading: false
};
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_USERS_LOADING: {
            return {
                ...state,
                isUsersLoading: true
            }
        }
        case STOP_USERS_LOADING: {
            return {
                ...state,
                isUsersLoading: false
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: action.payload
            }
        }
        case USERS_ERROR:{
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;

    }
}
