import React from 'react';

function Post({ post }) {

  return (
    <div className="Post">
      <div className="Post-title">{post.title}</div>
      <div className="Post-description">{post.description}</div>
      <div className="Post-body">{post.body}</div>
    </div>
  )
}

export default Post;