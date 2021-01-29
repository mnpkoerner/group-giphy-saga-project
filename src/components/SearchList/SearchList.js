import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const SearchList = () => {
  const dispatch = useDispatch();
  const searchReducer = useSelector((store) => store.searchReducer);

  const [isVisible, setIsVisible] = useState(true);

  const addFavorite = (url, title) => {
    console.log(url, title);
    const newFavorite = {
        url: url,
        title: title,
    }
    console.log(newFavorite)
    dispatch({type: 'POST_FAVORITE', payload: newFavorite})
    setIsVisible(!isVisible)
}


useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the search items from api
        dispatch({type:'NULL'})
    }, []);


// useEffect(() => {
//         console.log('component did mount');
//         // dispatch an action to request the search items from api
//         dispatch({type:'NULL'})
//     }, []);


        return(
            <div>
                <h2>Search Results</h2>
                 {searchReducer.map((searchItem) =>{
                     return(
                        <div className = 'searchContainer'>
                            <p>

                                <p>{searchItem.data?.title}</p>
                                <img className ='shadow' src={searchItem.url} width="400" height="300"></img>
                                {isVisible? <button  onClick={() => addFavorite(searchItem.url, searchItem.title)}>Favorite</button> : <span>Favorite</span>}

                            </p>
                        </div>
                     )
                 })}
            </div>
        )
}

export default SearchList;
