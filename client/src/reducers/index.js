import { combineReducers } from 'redux';
import auth from './auth';
import video from './video'

export default combineReducers({
    //   alert,
    auth,
    video
    //   profile,
    //   post
});