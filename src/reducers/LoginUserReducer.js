import {MOBILE_CHANGED,TOKEN_CHANGED, USER_LOGIN_ATTEMP, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS,USER_GET_DATA} from '../action/TypeLoginUser';
const INITIAL_STATE={
    mobile:'',
    password:'',
    dataLogin:'',
    token:'',
    loading:false,
    error:'',
    success:false
}
export default(state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case MOBILE_CHANGED:
            return{...state,mobile:action.payload };
            break;
        case TOKEN_CHANGED:
            return{...state,token:action.payload };
            break;
        case USER_GET_DATA:
            return{...state,dataLogin:action.payload };
            break;
        case USER_LOGIN_ATTEMP:
            return{...state,loading:true};
            break;
        case USER_LOGIN_SUCCESS:
            return{...state,success: true,dataLogin: action.payload};
            break;
        case USER_LOGIN_FAIL:
            return{...state,loading:false,success: false,error:action.payload};
            break;
        default:
            return state;

    }
}
