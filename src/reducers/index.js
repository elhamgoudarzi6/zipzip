import {combineReducers} from 'redux';
import LoginUserReducer from './LoginUserReducer';
export default combineReducers({
    loginUser:LoginUserReducer,
})
