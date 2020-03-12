import {
  LOAD_POSTS,
  ADD_POST,
  UPDATE_POST,
  LOAD_SINGLE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = {
  posts: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  const oldPost = action.payload ? state.posts[action.payload.postId] : {};
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, posts: action.payload.posts };


    // case ADD_UPDATE_POST:
    //   return {
    //     ...state,
    //     posts: {
    //       ...state.posts,
    //       [action.payload.post.id]: {...oldPost, ...action.payload.post}
    //     }
    //   };

    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.post.id]: action.payload.post
        }
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.post.id]: {
            ...state.posts[action.payload.post.id], 
            ...action.payload.post
          }
        }
      };

      case LOAD_SINGLE_POST:
        return {
          ...state,
          posts: {
            ...state.posts,
            [action.payload.post.id]: {
              ...state.posts[action.payload.post.id], 
              ...action.payload.post
            }
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
      const oldComments = oldPost.comments || [];
      return {
        ...state,
        posts: {
          ...state.posts,
          [oldPost.id]: {
            ...oldPost,
            comments: [
              ...oldComments, action.payload.comment
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