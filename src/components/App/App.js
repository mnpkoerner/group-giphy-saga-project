import React from 'react';
import Header from '../Header/Header';
import './App.css';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <h1>Giphy Search!</h1>
      </div>

      {/* add components to these routes */}
      <Route path ='/'>
        <Redirect to='/search' />
      </Route>
      <Route path='/search' />
      <Route path='/favorites' />

    </Router>
  );
}

export default App;
