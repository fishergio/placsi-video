import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { initialState } from '../initialState.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

initialState.user = {}
initialState.playing = {}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app'));