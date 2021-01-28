import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    const routeSearch = () => {
        console.log('in search');
        history.push('/search')
    }

    const routeFavorites = () => {
        console.log('in favorites');
        history.push('/favorites')
    }

    return (
        <header className='Header'>
            <h1></h1>
            <button onClick={routeSearch}>Search</button>
            <button onClick={routeFavorites}>Favorites</button>
        </header>
    )
}

export default Header;
