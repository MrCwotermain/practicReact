import {postsReducer} from "./postsReducer";
import {commentsReducer} from "./comentsReducer";
import {albumsReducer} from "./albumsReducer";
import {photosReducer} from "./photosReducer";
import {todosReducer} from "./todosReducer";
import {usersReducer} from "./usersReducer";

import {combineReducers} from "redux";

export default combineReducers({
    posts:postsReducer,
    comments:commentsReducer,
    albums:albumsReducer,
    photos:photosReducer,
    todos:todosReducer,
    users:usersReducer
})