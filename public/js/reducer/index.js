import {combineReducers} from 'redux';
import addUser from './register';
import login from "./login";
import postMessage from './postMessage'

export default combineReducers({
    addUser,
    login,
    postMessage
});