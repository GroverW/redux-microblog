import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddEditPostForm from './AddEditPostForm';
import NotFound from './NotFound';
import PostDetails from './PostDetails';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './actions';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector(st => st.posts);

  useEffect(function () {
    dispatch(loadPosts());
    setIsLoading(false);
  }, [dispatch]);

  if (!posts || isLoading) {
    return "Loading...";
  };

  return (
    <div className="App">
        <NavBar />
      <div className="App-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route exact path="/new">
            <AddEditPostForm />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
