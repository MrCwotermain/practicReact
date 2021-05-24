import {SET_USERS, START_USERS_LOADING, STOP_USERS_LOADING,USERS_ERROR} from "../action-types";

export const startUsersLoading=()=>({type:START_USERS_LOADING})
export const stopUsersLoading=()=>({type:STOP_USERS_LOADING})
export const setUsers=(payload)=>({type:SET_USERS,payload})
export const usersError=(payload)=>({type:USERS_ERROR,payload})