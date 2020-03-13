import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Post from './Post';
import AddEditPostForm from './AddEditPostForm';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment';
import { deletePost, addComment, deleteComment, getSinglePost } from './actions';
import { useSelector, useDispatch } from 'react-redux';


function PostDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { postId } = useParams();
  const post = useSelector(st => st.posts[postId]);
  const history = useHistory();
  const dispatch = useDispatch();

  
  useEffect(() => {
    if(post && !post.body) {
      dispatch(getSinglePost(postId));
    }
  }, [dispatch]);

  if (post && isLoading){
    setIsLoading(false);
  };
  
  if (!isLoading && !post) {
    return <Redirect to="/NotFound" />
  }

  if (isLoading) {
    return "Loading...";
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
      {post.comments && post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} delComment={delComment} />
      ))}
    </div>
  )
}

export default PostDetails;