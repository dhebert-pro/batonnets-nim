import 'core-js';
import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import 'src/assets/styles/custom.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from 'src/store/reducers';
import GlobalStyle from 'src/styles/GlobalStyle';

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, {}, composedEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <GlobalStyle />
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
