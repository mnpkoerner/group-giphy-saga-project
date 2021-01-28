

const FavoritesForm= () =>{
const dispatch = useDispatch();
let [searchCategory, setSearchCategory] = useState('');
let [favorite, setFavorite] = useState('')
    

const newCategory = (event) => {
    event.preventDefault();
    dispatch({type: 'GET_FAVORITE', payload: favoriteItem})
}
const setAsFavorite = (event) =>{
 setFavorite
}



return(
    <div>
        <button onClick={setAsFavorite}>Favorite (heart)</button>
    </div>
)

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
}
//map through favorites in database and post a selection
