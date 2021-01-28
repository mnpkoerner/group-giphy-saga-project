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
    yield takeEvery('TEST', testRoute);
}

function* testRoute(){
    console.log('in test route')
    yield put({ type: 'TEST_REDUCE', payload: 'test complete'})
}


//reducers
const testReducer = (state = '', action) => {
    if(action.type === 'TEST_REDUCE'){
        return state = action.payload
    }
    return state;
}



const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        testReducer
    }), applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
