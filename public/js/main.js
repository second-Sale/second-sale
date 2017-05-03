import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import Register from "./containers/register";
import Login from "./containers/login";
import reducer from "./reducer/index";
import ResgierMiddleware from './middlewares/register';
import LoginMiddleware from "./middlewares/login";
import Home from './containers/home';
const createStoreWithMiddleware = applyMiddleware(ResgierMiddleware,LoginMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>

        </Router>
    </Provider>, document.getElementById('app'));
