import React from 'react';
import { Link } from 'react-router-dom';
import Vote from './Vote';

function Post({ post, mode = "single" }) {
  // mode will be either: list or single


  let postList = <div className="Post">
    <div className="Post-title">
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </div>
    <div className="Post-description">{post.description}</div>
    <Vote postId={post.id} numVotes={post.votes} />
  </div>

  let postSingle = <div className="Post">
    <div className="Post-title">{post.title}</div>
    <div className="Post-description">{post.description}</div>
    <div className="Post-body">{post.body}</div>
    <Vote postId={post.id} numVotes={post.votes} />
  </div>

  return mode === "single" ? postSingle : postList;

}

export default Post;