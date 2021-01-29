import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

//saga
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import logger from 'redux-logger';

//watcherSaga holds all sagas
function* watcherSaga() {
    //dispatch({type: 'SEARCH_GIPHY', payload: 'string_search_term'})
    yield takeEvery('SEARCH_GIPHY', searchGiphy)
    yield takeEvery('POST_FAVORITE', postFavorite)
    yield takeEvery('GET_FAVORITE', getFavoriteGifs)
    yield takeEvery('GET_CATEGORY', getCategoryGifs)
    yield takeEvery('PUT_CATEGORY', putCategoryGifs)
}

//sagas
//saga to POST search to GIPHY api
//will populate DOM with Gifs the user
//can store information about in the database
function* putCategoryGifs(action) {
    try{
        console.log('in putCategoryGifs with payload:', action.payload);
        yield axios.put(`/api/favorite/${action.payload.favorite_id}`, action.payload)
        yield put({type: 'GET_FAVORITE'})
    } catch(error){
        console.log(error)
    }
}
// favorite_id
// category_id


function* searchGiphy(action) {
    try{
        console.log('in searchGiphy')
        const searchTerm = action.payload
        const response = yield axios.get(`/api/search/${searchTerm}`)
        //array of objects {id: number, url: '', string: 'string url}
        const response = yield put({type: 'SEND_SEARCH_TO_REDUCER', payload: response.data})

    } catch(error){
        console.log(error)
    }
}

//saga to POST Gifs
function* postFavorite(action){
    try {
        console.log('in POST favorite', action.payload)
        yield axios.post('/api/favorite', action.payload)
        yield put({type: 'GET_FAVORITE'})

    } catch(error){
        console.log(error)
    }
}


//saga to GET Gifs by category
//from our own database
function* getCategoryGifs() {
    try{
        console.log('in getFavoriteGifs saga');
        const response = yield axios.get('/api/category');
        //response is an array of objects with all gifs
        yield put({type: 'SEND_CAT_TO_REDUCER', payload: response.data})
    }catch(error){
        console.log(error);
        alert('error getting GIFs from database')
    }

}
//saga to GET Gifs by favorite
//from our own database
function* getFavoriteGifs() {
    try{
        console.log('in getFavoriteGifs saga');
        const response = yield axios.get('/api/favorite');
        //response is an array of objects with all favorites in it
        //sends to reducers an array of objects
        yield put({type: 'SEND_FAV_TO_REDUCER', payload: response.data})
    }catch(error){
        console.log(error);
        alert('error getting GIFs from database')
    }
}


//reducers
const searchReducer = (state = [], action) => {
    if(action.type === 'SEND_SEARCH_TO_REDUCER'){
        return action.payload
    }
    return state;
}
//favoriteReducer
const favoriteReducer = (state = [], action) => {
    if(action.type === 'SEND_FAV_TO_REDUCER') {
        return action.payload;
    }
    return state;
}

//categoryReducer
const categoryReducer = (state = [], action) => {
    if(action.type === 'SEND_CAT_TO_REDUCER') {
        return action.payload;
    }
    return state;
}


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        categoryReducer,
        favoriteReducer,
        searchReducer
    }), applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
