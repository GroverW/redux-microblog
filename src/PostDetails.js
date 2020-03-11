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
      {!isEditing && <AddCommentForm addComment={addNewComment} />}
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