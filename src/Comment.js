import React from "react";

function Comment({ comment, delComment }) {
  return (
    <div key={comment.id}>
      <button onClick={() => delComment(comment.id)}>X</button>
      <span>{comment.text}</span>
    </div>
  )
}

export default Comment;