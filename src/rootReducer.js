import {
  ADD_UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = {
  posts: {}
}


function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_UPDATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.id]: { ...action.payload.post }
        }
      };

    case DELETE_POST:
      const newPosts = { ...state.posts };
      delete newPosts[action.payload.id]
      return {
        ...state,
        posts: newPosts
      };

    case ADD_COMMENT:
      const oldPostAdd = state.posts[action.payload.postId];
      return {
        ...state,
        posts: {
          ...state.posts,
          [oldPostAdd.id]: {
            ...oldPostAdd,
            comments: [
              ...oldPostAdd.comments,
              action.payload.comment
            ]
          }
        }
      };

    case DELETE_COMMENT:
      const oldPostDel = state.posts[action.payload.postId];
      return {
        ...state,
        posts: {
          ...state.posts,
          [oldPostDel.id]: {
            ...oldPostDel,
            comments: oldPostDel.comments.filter(comment => comment.id !== action.payload.commentId)
          }
        }
      }

    default:
      return state;
  }

}

export default rootReducer;