import {SET_PHOTOS, START_PHOTOS_LOADING,
    STOP_PHOTOS_LOADING,
    PHOTOS_ERROR} from "../action-types";

export const startPhotosLoading=()=>({type:START_PHOTOS_LOADING})
export const stopPhotosLoading=()=>({type:STOP_PHOTOS_LOADING})
export const setPhotos=(payload)=>({type:SET_PHOTOS,payload})
export const photosError=(payload)=>({type:PHOTOS_ERROR,payload})