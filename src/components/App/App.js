import React from 'react';
import Header from '../Header/Header'
import{useEffect} from 'react'
import {useDispatch} from 'react-redux'




function App(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('page loaded');
    // dispatch an action to page
    dispatch({type: 'TEST'})
  }, []);

  return (
    <div>
      <Header />
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
