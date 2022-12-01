import { applyMiddleware, combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

const sagaMidddleware = createSagaMiddleware();
const middlewares = [sagaMidddleware];

const configureStore = () => {
    return createStore(combineReducers({
        entries: entriesReducer,
        modals: modalsReducer
    }), composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)}

export default configureStore;