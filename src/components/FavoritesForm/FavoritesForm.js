import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FavoritesForm = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((store) => store.favoriteReducer);
  const categoryNames = useSelector((store) => store.categoryReducer);
  const [currentCat, setCurrentCat] = useState(0);

  useEffect(() => {
    dispatch({ type: 'GET_FAVORITE' });
    dispatch({ type: 'GET_CATEGORY' });
  }, []);

  const handleCategory = (id) => {
    // this is where we will send category to saga to server to db
    const newFave = {
        category_id: Number(currentCat),
        favorite_id: Number(id)
    }
    console.log(newFave);
    dispatch({type: 'PUT_CATEGORY', payload: newFave})
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
          <select
            name="category"
            onChange={(event) => setCurrentCat(event.target.value)}
          >
            {categoryNames.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
          <button onClick={() => {handleCategory(favorite.id)}}>Change Category</button>
          <h5>Category: {favorite.category_id}</h5>
        </div>
      ))}
    </div>
  );
};
//map through favorites in database and post a selection
export default FavoritesForm;
