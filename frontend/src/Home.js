import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';

function Home() {
  const posts = useSelector(store => Object.entries(store.posts)
    .map(entry => ({
      id: entry[0],
      title: entry[1].title,
      description: entry[1].description
    })))

  return (
    <div className="Home">
      <h1>Microblog</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} mode="list" />
      ))}
    </div>
  )
}

export default Home;