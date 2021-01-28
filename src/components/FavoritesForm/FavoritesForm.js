import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FavoritesForm = () => {
  const dispatch = useDispatch();
  let [favorites, setFavorites] = useState([]);

  const favoriteList = useSelector((store) => store.favoriteReducer);

  // need to send dispatch to line 18 of index js, getfavorite, favoritereducer on line 88

  useEffect(() => {
    getFavorites();
    dispatch({ type: 'GET_FAVORITE' });
  }, []);

  const getFavorites = () => {
    console.log('in getfavorites');
  };

  return (
    <div>
      <p>in favorites</p>
      <button>Favorite (heart)</button>
    </div>
  );

  //     return(
  //     <div>
  //         <form onSubmit={newSearch}>
  //             <input type="text" value = {searchCategory} list="chooseGiphy"/>
  //                 <datalist id="chooseGiphy">
  //                 <option value="funny"/>
  //                 <option value="cohort"/>
  //                 <option value="cartoon"/>
  //                 <option value="nsfw"/>
  //                 <option value="meme"/>
  //                 </datalist>
  //                 <button type='Submit'></button>
  //         </form>
  //     </div>
  // )
};
//map through favorites in database and post a selection
export default FavoritesForm;
