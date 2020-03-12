import React from 'react';
import { Link } from 'react-router-dom';
import { updatePostVotes } from './actions';
import { useDispatch } from 'react-redux';

function Post({ post, mode = "single" }) {
  // mode will be either: list or single

  const dispatch = useDispatch();

  const upVote = () => {
    dispatch(updatePostVotes(post.id, "up"));
  }

  const downVote = () => {
    dispatch(updatePostVotes(post.id, "down"));
  }

  let postList = <div className="Post">
    <div className="Post-title">
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </div>
    <div className="Post-description">{post.description}</div>
    <div className="Post-votes">
      <span>{post.votes} votes</span>
      <button onClick={upVote}>↑</button>
      <button onClick={downVote}>↓</button>
    </div>
  </div>

  let postSingle = <div className="Post">
    <div className="Post-title">{post.title}</div>
    <div className="Post-description">{post.description}</div>
    <div className="Post-body">{post.body}</div>
    <div className="Post-votes">
      <span>{post.votes} votes</span>
      <button onClick={upVote}>↑</button>
      <button onClick={downVote}>↓</button>
    </div>
  </div>

  return mode === "single" ? postSingle : postList;

}

export default Post;