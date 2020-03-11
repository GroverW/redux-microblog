import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddEditPostForm from './AddEditPostForm';
import NotFound from './NotFound';
import PostDetails from './PostDetails';


function App() {
  const [posts, setPosts] = useState([]);
  console.log("posts", posts)

  const addPost = newPost => {
    setPosts(oldPosts => [
      ...oldPosts,
      newPost
    ]);
  }

  const updatePost = (updatedPost, id) => {
    const newPosts = posts.map(post => post.id === id ? updatedPost : post);
    setPosts(oldPosts => newPosts);
  }

  const deletePost = id => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(oldPosts => newPosts);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/posts/:postId">
          <PostDetails posts={posts} updatePost={updatePost} deletePost={deletePost} />
        </Route>
        <Route exact path="/new">
          <AddEditPostForm addEditPost={addPost} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
