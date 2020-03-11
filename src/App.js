import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddPostForm from './AddPostForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <AddPostForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
