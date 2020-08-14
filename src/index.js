import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { initialState } from '../initialState.json';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

initialState.user = {}
initialState.playing = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app'));