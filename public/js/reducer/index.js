import {combineReducers} from 'redux';
import addUser from './register';
import login from "./login";

export default combineReducers({
    addUser,
    login
});