import { applyMiddleware, combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { initSagas } from '../sagas';

const sagaMidddleware = createSagaMiddleware();
const middlewares = [sagaMidddleware];

const configureStore = () => {
    const store = createStore(combineReducers({
        entries: entriesReducer,
        modals: modalsReducer
    }), composeWithDevTools(
        applyMiddleware(...middlewares)
    )
    );
    initSagas(sagaMidddleware);
    return store;
}

export default configureStore;