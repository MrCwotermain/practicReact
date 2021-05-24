import {START_POSTS_LOADING,STOP_POSTS_LOADING,SET_POSTS,POSTS_ERROR} from '../action-types'
const initialState = {
    posts: [],
    isPostsLoading: false
};
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_POSTS_LOADING: {
            return {
                ...state,
                isPostsLoading: true
            }
        }
        case STOP_POSTS_LOADING: {
            return {
                ...state,
                isPostsLoading: false
            }
        }
            case SET_POSTS:{
                return {
                    ...state,
                    posts: action.payload
                }
            }
        case POSTS_ERROR:{
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;

    }
}
