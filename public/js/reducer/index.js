import {combineReducers} from 'redux';
import addUser from './register';
import login from "./login";
import postMessage from './postMessage';
import home from './home'

export default combineReducers({
    addUser,
    login,
    postMessage,
    home
});