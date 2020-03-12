import {
  LOAD_POSTS,
  ADD_POST,
  UPDATE_POST,
  LOAD_SINGLE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_POST_VOTES
} from './actionTypes';
import BackendApi from './api';

export function loadPosts() {
  return async function (dispatch) {
    const posts = await BackendApi.getPosts();

    if (posts) {
      dispatch({ type: LOAD_POSTS, payload: { posts } });
    }
  }
}

export function addPost(post) {
  return async function (dispatch) {
    const resp = await BackendApi.addPost(post);

    if (resp.data) {
      dispatch({ type: ADD_POST, payload: { post: resp.data } });
    }
  }
}

export function putPost(postId, post) {
  return async function (dispatch) {
    const resp = await BackendApi.putPost(postId, post);

    if (resp.data) {
      dispatch({ type: UPDATE_POST, payload: { post: resp.data } });
    }
  }
}

export function getSinglePost(postId) {
  return async function (dispatch) {
    const resp = await BackendApi.getPost(postId);

    if (resp.data) {
      dispatch({ type: LOAD_SINGLE_POST, payload: { post: resp.data } });
    }
  }
}

export function deletePost(id) {
  return async function (dispatch) {
    await BackendApi.deletePost(id);
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
  return async function (dispatch) {
    await BackendApi.deleteComment(postId, commentId);
    dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
  }
}

export function updatePostVotes(postId, direction) {
  return async function (dispatch) {
    const resp = await BackendApi.updatePostVotes(postId, direction);

    if (resp.data) {
      dispatch({ type: UPDATE_POST_VOTES, payload: { postId, votes: resp.data.votes } })
    }
  }
}