import {SET_COMMENTS, START_COMMENTS_LOADING,
    STOP_COMMENTS_LOADING,
    COMMENTS_ERROR} from "../action-types";

export const startCommentsLoading=()=>({type:START_COMMENTS_LOADING})
export const stopCommentsLoading=()=>({type:STOP_COMMENTS_LOADING})
export const setComments=(payload)=>({type:SET_COMMENTS,payload})
export const commentsError=(payload)=>({type:COMMENTS_ERROR,payload})