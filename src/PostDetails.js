import React, { useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Post from './Post';
import AddEditPostForm from './AddEditPostForm';
import AddCommentForm from './AddCommentForm';
import { deletePost, addComment, deleteComment } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function PostDetails() {
  const [isEditing, setIsEditing] = useState(false);

  const { postId } = useParams();
  const history = useHistory();

  const post = useSelector(store => store.posts[postId]);
  const dispatch = useDispatch();

  if (!post) {
    return <Redirect to="/NotFound" />
  }

  const handleToggle = () => {
    setIsEditing(!isEditing);
  }

  const handleDelete = () => {
    dispatch(deletePost(postId));
    history.push("/");
  }

  const addNewComment = newComment => {
    dispatch(addComment(postId, newComment));
  }

  const delComment = commentId => {
    dispatch(deleteComment(postId, commentId))
  }

  return (
    <div className="PostDetails">
      {isEditing
        ? <AddEditPostForm post={post} toggleForm={handleToggle} />
        : <Post post={post} />}
      {!isEditing && <button onClick={handleToggle}>Edit Post</button>}
      {!isEditing && <button onClick={handleDelete}>Delete Post</button>}
      <AddCommentForm addComment={addNewComment} />
      <h2>Comments</h2>
      {post.comments.map(comment => (
        <div key={comment.id}>
          <button onClick={()=>delComment(comment.id)}>X</button>
          <span>{comment.text}</span>
        </div>
      ))}
    </div>
  )
}

export default PostDetails;
// function PostDetails({ posts, updatePost, deletePost }) {
//   const [isEditing, setIsEditing] = useState(false);

//   const { postId } = useParams();
//   const history = useHistory();

//   const post = posts.find(p => p.id === postId);

//   if (!post) {
//     return <Redirect to="/NotFound" />
//   }

//   const handleToggle = () => {
//     setIsEditing(!isEditing);
//   }

//   const handleDelete = () => {
//     deletePost(postId);
//     history.push("/");
//   }

//   const addComment = newComment => {
//     const newPost = {
//       ...post,
//       comments: [...post.comments, newComment]
//     }
//     updatePost(newPost, postId);
//   }

//   const deleteComment = commentId => {
//     const newPost = {
//       ...post, 
//       comments: post.comments.filter(comment => comment.id !== commentId)
//     }
//     updatePost(newPost, postId);
//   }

//   return (
//     <div className="PostDetails">
//       {isEditing
//         ? <AddEditPostForm post={post} addEditPost={updatePost} toggleForm={handleToggle} />
//         : <Post post={post} />}
//       {!isEditing && <button onClick={handleToggle}>Edit Post</button>}
//       {!isEditing && <button onClick={handleDelete}>Delete Post</button>}
//       <AddCommentForm addComment={addComment} />
//       <h2>Comments</h2>
//       {post.comments.map(comment => (
//         <div key={comment.id}>
//           <button onClick={()=>deleteComment(comment.id)}>X</button>
//           <span>{comment.text}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default PostDetails;