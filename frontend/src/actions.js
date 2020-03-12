import {
  LOAD_POSTS,
  ADD_UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';
import BackendApi from './api';

export function loadPosts(posts) {
  return { type: LOAD_POSTS, payload: { posts } };
}

export function addUpdatePost(post) {
  return async function (dispatch) {
    const resp = await BackendApi.addPost(post);
    if (resp.data) {
      dispatch({ type: ADD_UPDATE_POST, payload: { post } });
    }
  }
}

// export function updatePost(post) {
//   return async function (dispatch) {
//     const resp = await BackendApi.addPost(post);
//     if (resp.data) {
//       dispatch({ type: ADD_UPDATE_POST, payload: { post } });
//     }
//   }
// }

export function getSinglePost(postId){
  return async function(dispatch) {
    const resp = await BackendApi.getPost(postId);
    if (resp.data){
      dispatch(updatePost(resp.data));
    }
  }
}

function updatePost(post){
  return { type: ADD_UPDATE_POST, payload: { post } };
}


export function deletePost(id) {
  return async function (dispatch) {
    const resp = await BackendApi.deletePost(id);
    dispatch({ type: DELETE_POST, payload: { id } });
  }
}

export function addComment(postId, comment) {
  return async function (dispatch) {
    const resp = await BackendApi.addComment(postId, comment);
    if (resp.data) {
      dispatch({ type: ADD_COMMENT, payload: { postId, comment: resp.data } })
    };
  };
}

export function deleteComment(postId, commentId) {
  return { type: DELETE_COMMENT, payload: { postId, commentId } };
}