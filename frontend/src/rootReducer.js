import {
  LOAD_POSTS,
  ADD_UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = {
  posts: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  const oldPost = action.payload ? state.posts[action.payload.postId] : null;
  switch (action.type) {
    case LOAD_POSTS: 
      return {...state, posts: action.payload.posts};
    

    case ADD_UPDATE_POST:
      console.log("IN REDUCER",action.payload.post)
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.post.id]: action.payload.post
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
      console.log("action", action)
      return {
        ...state,
        posts: {
          ...state.posts,
          [oldPost.id]: {
            ...oldPost, 
            comments: [
              ...oldPost.comments, action.payload.comment
            ]
          }
        }
      };

    case DELETE_COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [oldPost.id]: {
            ...oldPost,
            comments: oldPost.comments.filter(
              comment => comment.id !== action.payload.commentId)
          }
        }
      }

    default:
      return state;
  }

}

export default rootReducer;