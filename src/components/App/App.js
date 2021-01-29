import React from 'react';
import Header from '../Header/Header';
import './App.css';
import ParentComponent from '../ParentComponent/ParentComponent'


function App(props) {
  return (
      <div className="main">
        <ParentComponent />
      </div>
  );
}

export default App;
