import {combineReducers} from 'redux';
import addUser from './register';
import login from "./login";
import postMessage from './postMessage';
import home from './home';
import ImageUpload from './imageUpload';

export default combineReducers({
    addUser,
    login,
    postMessage,
    home,
    ImageUpload
});