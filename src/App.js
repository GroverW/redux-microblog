import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddEditPostForm from './AddEditPostForm';
import NotFound from './NotFound';
import PostDetails from './PostDetails';


function App() {
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
