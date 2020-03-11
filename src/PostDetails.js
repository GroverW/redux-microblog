import React, { useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Post from './Post';
import AddEditPostForm from './AddEditPostForm';

function PostDetails({ posts, updatePost, deletePost }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Redirect to="/NotFound" />
  }

  const handleToggle = () => {
    setIsEditing(!isEditing);
  }

  const handleDelete = () => {
    deletePost(id);
    history.push("/");
  }

  return (
    <div className="PostDetails">
      {isEditing
        ? <AddEditPostForm post={post} addEditPost={updatePost} toggleForm={handleToggle} />
        : <Post post={post} />}
      {!isEditing && <button onClick={handleToggle}>Edit Post</button>}
      {!isEditing && <button onClick={handleDelete}>Delete Post</button>}
    </div>
  )
}

export default PostDetails;