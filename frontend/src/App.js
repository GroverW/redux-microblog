import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddEditPostForm from './AddEditPostForm';
import NotFound from './NotFound';
import PostDetails from './PostDetails';
import BackendApi from './api';
import { useDispatch } from 'react-redux';
import { loadPosts } from './actions';


function App() {
  console.log("app load")
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(function () {
    const dispatchPosts = async () => {
      console.log("dispatching")
      const posts = await BackendApi.getPosts();
      if (posts) {
        dispatch(loadPosts(posts));
        setIsLoading(false);
        }
        console.log("resp", posts)
    }
    dispatchPosts();
  }, []);

  if (isLoading){
    return "Loading...";
  };

  return (
    <div className="App">
      <NavBar />
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
  );
}

export default App;
