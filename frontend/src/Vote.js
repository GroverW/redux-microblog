import React from 'react';
import { updatePostVotes } from './actions';
import { useDispatch } from 'react-redux';

function Vote({ postId, numVotes }) {
  const dispatch = useDispatch();

  const upVote = () => {
    dispatch(updatePostVotes(postId, "up"));
  }

  const downVote = () => {
    dispatch(updatePostVotes(postId, "down"));
  }

  return (
    <div className="Post-votes">
      <span>{numVotes} votes</span>
      <button onClick={upVote}>↑</button>
      <button onClick={downVote}>↓</button>
    </div>
  )
}

export default Vote;