import {
  ADD_UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function addUpdatePost(post) {
  return { type: ADD_UPDATE_POST, payload: { post } };
}

export function deletePost(id) {
  return { type: DELETE_POST, payload: { id } };
}

export function addComment(postId, comment) {
  return { type: ADD_COMMENT, payload: { postId, comment } };
}

export function deleteComment(postId, commentId) {
  return { type: DELETE_COMMENT, payload: { postId, commentId } };
}