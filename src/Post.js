import React from 'react';
import {Link} from 'react-router-dom';

function Post({ post }) {

  return (
    <div className="Post">
      <div className="Post-title">{post.title}</div>
      <div className="Post-description">{post.description}</div>
      <div className="Post-body">{post.body}</div>
      <Link to={`/posts/${post.id}`}>Go to post</Link>
    </div>
  )
}

export default Post;