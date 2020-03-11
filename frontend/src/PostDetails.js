import React, { useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Post from './Post';
import AddEditPostForm from './AddEditPostForm';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment';
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

  const editingJSX = <AddEditPostForm post={post} toggleForm={handleToggle} />

  const viewingJSX = <div>
    <Post post={post} mode="single" />
    <button onClick={handleToggle}>Edit Post</button>
    <button onClick={handleDelete}>Delete Post</button>
    <AddCommentForm addComment={addNewComment} />
  </div>

  return (
    <div className="PostDetails">
      {isEditing ? editingJSX : viewingJSX}

      <h2>Comments</h2>
      {post.comments.map(comment => (
        <Comment comment={comment} delComment={delComment} />
      ))}
    </div>
  )
}

export default PostDetails;