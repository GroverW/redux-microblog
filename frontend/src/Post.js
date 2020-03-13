import React from 'react';
import { Link } from 'react-router-dom';
import Vote from './Vote';
import './Post.css';

function Post({ post, mode = "single" }) {
  // mode will be either: list or single


  let postList = <div className="Post-list">
    <div className="Post-list-title">
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </div>
    <div className="Post-list-description">{post.description}</div>
    <Vote postId={post.id} numVotes={post.votes} />
  </div>

  let postSingle = <div className="Post-single">
    <div className="Post-single-title">{post.title}</div>
    <div className="Post-single-description">{post.description}</div>
    <div className="Post-single-body">{post.body}</div>
    <Vote postId={post.id} numVotes={post.votes} />
  </div>

  return mode === "single" ? postSingle : postList;

}

export default Post;