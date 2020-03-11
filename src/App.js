import React, {useState} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddPostForm from './AddPostForm';
import NotFound from './NotFound';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = newPost => {
    setPosts(oldPosts => [
      ...oldPosts,
      newPost
    ]);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/new">
          <AddPostForm addPost={addPost} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
