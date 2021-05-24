import {SET_ALBUMS, START_ALBUMS_LOADING,
    STOP_ALBUMS_LOADING,
    ALBUMS_ERROR} from "../action-types";
export const startAlbumsLoading=()=>({type:START_ALBUMS_LOADING})
export const stopAlbumsLoading=()=>({type:STOP_ALBUMS_LOADING})
export const setAlbums=(payload)=>({type:SET_ALBUMS,payload})
export const albumsError=(payload)=>({type:ALBUMS_ERROR,payload})