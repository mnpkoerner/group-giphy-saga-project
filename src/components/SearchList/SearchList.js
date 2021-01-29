import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { useState } from 'react';


const SearchList = () =>{

const dispatch = useDispatch();

const searchReducer = useSelector(store => store.searchReducer)

const [isVisible, setIsVisible] = useState(true)

const addFavorite = (url, title) => {
    console.log(url, title)
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

    const favoriteSwitch = (url, title) =>{
        currentValue = document.getElementById ('switch').value;
        if(currentValue == "Off") { 
             document.getElementById('switch').value="On" 
            setFavoriteItem({
                url:url,
                title:title
                })
             console.log("item sent to favorites", favoriteItem);  
             dispatch({ type:'POST_FAVORITE', payload: favoriteItem})
        }else{
        document.getElementById('switch').value="Off";
        }
    }
        return(
            <div>
                <h2>Search Results</h2>
                 {searchReducer.map((searchItem) =>{
                     return(
                        <ul>
                            <li>

                                <p>{searchItem.data?.title}</p>
                                <img className ='shadow' src={searchItem.url} width="400" height="300"></img>
                                <button  id ="switch" value="Off" onClick={() => favoriteSwitch(searchItem.data?.title, searchItem.data?.image_url)}>Favorite</button>

                            </li>
                        </ul>
                     )
                 })}
            </div>
        )
}

export default SearchList;
