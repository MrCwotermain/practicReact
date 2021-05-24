import logo from './logo.svg';
import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setPosts,
    stopPostsLoading,
    startPostsLoading,
    postsError,
    startCommentsLoading,
    setComments,
    commentsError, stopCommentsLoading,
    startAlbumsLoading, setAlbums, stopAlbumsLoading, albumsError,
    setPhotos, startPhotosLoading, stopPhotosLoading, photosError,
    setTodos, startTodosLoading, stopTodosLoading, todosError,
    setUsers, startUsersLoading, stopUsersLoading, usersError
} from './redux'

// const Posts = () => {
//     const data = useSelector((state) => state.posts);
//     console.log(data)
//     const dispatch = useDispatch();
//     const postsFetcher = async () => {
//         try {
//             dispatch(startPostsLoading())
//             const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//             const data = await resp.json();
//             dispatch(setPosts(data))
//         } catch (e) {
//             console.log(e)
//             dispatch(postsError('failed to fetch data'))
//         } finally {
//             dispatch(stopPostsLoading())
//         }
//     }
//     React.useEffect(() => {
//         postsFetcher()
//     }, [])
//
//     if (data.error) {
//         return <h1> {data.error}</h1>
//     }
//     if (data.isPostsLoading) {
//         return (
//             <h2> posts are loading</h2>
//         )
//     }
//
//
//     return (<div>
//         {data.posts.map(({id, title, body}) => (<p key={id}>{id} --{title}---{body}</p>))
//         }
//     </div>)
// }

// const Comments = () => {
//     const data = useSelector((state) => state.comments);
//     console.log(data)
//     const dispatch = useDispatch();
//     const commentsFetcher = async () => {
//         try {
//             dispatch(startCommentsLoading())
//             const resp = await fetch('https://jsonplaceholder.typicode.com/comments')
//             const data = await resp.json();
//             dispatch(setComments(data))
//         } catch (e) {
//             console.log(e)
//             dispatch(commentsError('failed to fetch data'))
//         } finally {
//             dispatch(stopCommentsLoading())
//         }
//     }
//     React.useEffect(() => {
//         commentsFetcher()
//     }, [])
//     if (data.error) {
//         return <h1> {data.error}</h1>
//     }
//     if (data.isCommentsLoading) {
//         return (
//             <h2> comments are loading</h2>
//         )
//     }
//     return (<div>
//         {data.comments.map(({id, name, email}) => (<p key={id}>{id} --{name}---{email}</p>))
//         }
//     </div>)
// }
// const Albums = () => {
//     const data = useSelector((state) => state.albums);
//     console.log(data)
//     const dispatch = useDispatch();
//     const albumsFetcher = async () => {
//         try {
//             dispatch(startAlbumsLoading())
//             const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
//             const data = await resp.json();
//             dispatch(setAlbums(data))
//         } catch (e) {
//             console.log(e)
//             dispatch(albumsError('failed to fetch data'))
//         } finally {
//             dispatch(stopAlbumsLoading())
//         }
//     }
//     React.useEffect(() => {
//         albumsFetcher()
//     }, [])
//     if (data.error) {
//         return <h1> {data.error}</h1>
//     }
//     if (data.isAlbumsLoading) {
//         return (
//             <h2> albums are loading</h2>
//         )
//     }
//     return (<div>
//         {data.albums.map(({id, title}) => (<p key={id}>{id} --{title} </p>))
//         }
//     </div>)
// }

// const Photos = () => {
//     const data = useSelector((state) => state.photos);
//     console.log(data)
//     const dispatch = useDispatch();
//     const photosFetcher = async () => {
//         try {
//             dispatch(startPhotosLoading())
//             const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
//             const data = await resp.json();
//             dispatch(setPhotos(data))
//         } catch (e) {
//             console.log(e)
//             dispatch(photosError('failed to fetch data'))
//         } finally {
//             dispatch(stopPhotosLoading())
//         }
//     }
//     React.useEffect(() => {
//         photosFetcher()
//     }, [])
//     if (data.error) {
//         return <h1> {data.error}</h1>
//     }
//     if (data.isPhotosLoading) {
//         return (
//             <h2> photos are loading</h2>
//         )
//     }
//     return (<div>
//         {data.photos.map(({id, title}) => (<p key={id}>{id} --{title} </p>))
//         }
//     </div>)
// }

// const Todos = () => {
//     const data = useSelector((state) => state.todos);
//     console.log(data)
//     const dispatch = useDispatch();
//     const todosFetcher = async () => {
//         try {
//             dispatch(startTodosLoading())
//             const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
//             const data = await resp.json();
//             dispatch(setTodos(data))
//         } catch (e) {
//             console.log(e)
//             dispatch(todosError('failed to fetch data'))
//         } finally {
//             dispatch(stopTodosLoading())
//         }
//     }
//     React.useEffect(() => {
//         todosFetcher()
//     }, [])
//     if (data.error) {
//         return <h1> {data.error}</h1>
//     }
//     if (data.istTodosLoading) {
//         return (
//             <h2> todos are loading</h2>
//         )
//     }
//     return (<div>
//         {data.todos.map(({id, title, completed}) => (<p key={id}>{id} --{title}--{completed} </p>))
//         }
//     </div>)
// }

const Users = () => {
    const data = useSelector((state) => state.users);
    console.log(data)
    const dispatch = useDispatch();
    const usersFetcher = async () => {
        try {
            dispatch(startUsersLoading())
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await resp.json();
            dispatch(setUsers(data))
        } catch (e) {
            console.log(e)
            dispatch(usersError('failed to fetch data'))
        } finally {
            dispatch(stopUsersLoading())
        }
    }
    React.useEffect(() => {
        usersFetcher()
    }, [])
    if (data.error) {
        return <h1> {data.error}</h1>
    }
    if (data.istUsersLoading) {
        return (
            <h2> users are loading</h2>
        )
    }
    return (<div>
        {data.users.map(({id, name, username}) => (<p key={id}>{id} --{name}--{username} </p>))
        }
    </div>)
}
    function App() {
        return (
            <div>
                {/*<Posts/>*/}
                {/*<Comments/>*/}
                {/*{<Albums/>}*/}
                {/*<Photos/>*/}
                {/*<Todos/>*/}
                <Users/>
            </div>
        );
    }

    export default App;
