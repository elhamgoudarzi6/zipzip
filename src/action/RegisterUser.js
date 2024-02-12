import {
    MOBILE_CHANGED,
    USER_REGISTER_ATTEMP,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS
} from './TypeRegisterUser';
import {NavigationActions} from 'react-navigation';

export const mobileChanged = (text) => {
    return {
        type: MOBILE_CHANGED,
        payload: text
    }
}
export const registerUser = ({mobile, navigation}) => {
    return (dispatch) => {
        dispatch({type: USER_REGISTER_ATTEMP})
        fetch('http://194.5.175.25:4000/api/v1/auth', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mobile,
            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success === true) {
                registerUserSuccess(dispatch, navigation,mobile);
            } else {
                registerUserFail(dispatch,responseJson.data);
            }
        }).catch((error) => {
            console.error('err');
        });
    }
}
const registerUserSuccess = (dispatch, navigation,mobile) => {
    dispatch({type: USER_REGISTER_SUCCESS});
    const NavigationAction = NavigationActions.navigate({routeName: 'SendSms', params: {mobile}})
    navigation.dispatch(NavigationAction);

}
const registerUserFail = (dispatch,error) => {
    dispatch({type: USER_REGISTER_FAIL,payload:error})
}
