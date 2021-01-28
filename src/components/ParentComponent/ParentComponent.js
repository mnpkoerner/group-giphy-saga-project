import React from 'react';
// needs imports from all children components
function ParentComponent(){

    //this component will hold the other components to keep the App.js clean

    return(<div>
        <SearchForm/>
        <SearchList/>


        {/* either needs a switch statement to show favorites or search || 
        something else I cant think of right now */}
        <FavoritesList/>
        <FavoritesForm/>
        
    </div>)

}export default ParentComponent;