import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import ProsCons from './components/ProsCons';

import reducers from './reducers';
import './App.css';

const store = createStore(reducers, applyMiddleware(thunk));

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <ProsCons />
            </Provider>
        );
    }
}
