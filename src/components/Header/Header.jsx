import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import Box from '@material-ui/core/Box';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      main: red[400],
    },
  },
});

const useStyles = makeStyles({
  searchButton: {
    margin: '5px;',
    borderRadius: 5,
    border: 0,
    background: 'linear-gradient(45deg, #1976d2, #512da8)',
    color: 'white',
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  favoriteButton: {
    margin: '5px;',
    borderRadius: 5,
    border: 0,
    background: 'linear-gradient(45deg, #512da8, #9c27b0)',
    color: 'white',
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

function Header() {
  const classes = useStyles();
  const history = useHistory();

  const routeSearch = () => {
    console.log('in search');
    history.push('/search');
  };

  const routeFavorites = () => {
    console.log('in favorites');
    history.push('/favorites');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box border={2} borderRadius={8} color={'white'}>
        <header className="Header">
          <h1>YOUR GIPHY</h1>
          <Button
            startIcon={<SearchIcon />}
            variant="contained"
            //   size="large"
            className={classes.searchButton}
            onClick={routeSearch}
          >
            Search
          </Button>
          <Button
            startIcon={<FavoriteIcon />}
            variant="contained"
            //   size="large"
            className={classes.favoriteButton}
            onClick={routeFavorites}
          >
            Favorites
          </Button>
        </header>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
