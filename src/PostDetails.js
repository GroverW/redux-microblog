import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Post from './Post';
import AddEditPostForm from './AddEditPostForm';

function PostDetails({ posts, updatePost }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const { id } = useParams();

  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Redirect to="/NotFound" />
  }

  const handleToggle = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="PostDetails">
      {isEditing
        ? <AddEditPostForm post={post} addEditPost={updatePost} toggleForm={handleToggle} />
        : <Post post={post} />}
      {!isEditing && <button onClick={handleToggle}>Edit Post</button>}
    </div>
  )
}

export default PostDetails;