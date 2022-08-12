import { reducerGatos } from './gatosDunks'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './mySagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

function generateStore(){
    const store = createStore(reducerGatos, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(mySaga)

    return store;
}

export default generateStore
