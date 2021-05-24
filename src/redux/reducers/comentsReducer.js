import {START_COMMENTS_LOADING,STOP_COMMENTS_LOADING,SET_COMMENTS,COMMENTS_ERROR} from '../action-types'
const initialState = {
    comments: [],
    isCommentsLoading: false
};
export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_COMMENTS_LOADING: {
            return {
                ...state,
                isCommentsLoading: true
            }
        }
        case STOP_COMMENTS_LOADING: {
            return {
                ...state,
                isCommentsLoading: false
            }
        }
        case SET_COMMENTS:{
            return {
                ...state,
                comments: action.payload
            }
        }
        case COMMENTS_ERROR:{
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;

    }
}
