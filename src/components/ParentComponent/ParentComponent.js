import React from 'react';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import FavoritesForm from '../FavoritesForm/FavoritesForm'
import SearchForm from '../SearchForm/SearchForm'
import SearchList from '../SearchList/SearchList'
// needs imports from all children components
function ParentComponent() {
  //this component will hold the other components to keep the App.js clean
console.log('in parent component')
  return (
    <Router>
      <div>
        <Route path="/">
          <Redirect to="/search" />
        </Route>
        <Route path="/search">
          <SearchForm />
          <SearchList />
        </Route>

        <Route path="/favorites">
          {/*<FavoritesList />*/}
          <FavoritesForm />
        </Route>

        {/* either needs a switch statement to show favorites or search || 
        something else I cant think of right now */}
      </div>
    </Router>
  );
}
export default ParentComponent;
