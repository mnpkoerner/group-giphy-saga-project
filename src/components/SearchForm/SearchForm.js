import React, {useState}from 'react';
import { useDispatch } from 'react-redux';


const SearchForm = () =>{
const dispatch = useDispatch();
let [searchItem, setSearchItem] = useState('')

const newSearch = (event) => {
    event.preventDefault();
    dispatch({type: "SEARCH_GIPHY", payload: searchItem})
}


        return(
            <div>
                <h2>Search using GIF tags (funny etc...)</h2>
                <form onSubmit={newSearch}>
                <input type='text' 
                value={searchItem} 
                onChange={(event)=> setSearchItem(event.target.value)} 
                />
                <button className = 'searchButton' type='Submit'>Search</button>
                </form>
            </div>
        )
}

export default SearchForm;