import React from 'react';
import Post from './Post';

function Home({ posts }) {

  return (
    <div className="Home">
      <h1>Microblog</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home;