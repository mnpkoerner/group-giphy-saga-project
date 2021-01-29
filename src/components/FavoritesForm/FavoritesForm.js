import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FavoritesForm = () => {
  const dispatch = useDispatch();

  const favoriteList = useSelector((store) => store.favoriteReducer);
  const categoryNames = useSelector((store) => store.categoryReducer);

  // need to send dispatch to line 18 of index js, getfavorite, favoritereducer on line 88

  useEffect(() => {
    dispatch({ type: 'GET_FAVORITE' });
    dispatch({ type: 'GET_CATEGORY' });
  }, []);

  const handleCategory = () => {
    // this is where we will send category to saga to server to db
  };

  return (
    <div>
      <h2>Search Results</h2>
      {favoriteList.map((favorite) => (
        <div>
          <img
            src={favorite.url}
            key={favorite.id}
            value={favorite.category_id}
          />
          <select name="category" onChange={handleCategory}>
            {categoryNames.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      ))}
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
