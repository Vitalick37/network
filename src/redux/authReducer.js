import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initalState, action) => {

    switch(action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                // isAuth: true,
            }

            default:
                return state;

    }

}

export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuth()
    .then((data) => { 
        // debugger;
        if( data.resultCode === 0) {

            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email, true));
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
    .then(response => { 
        // debugger;
        if( response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => { 
        // debugger;
        if( response.data.resultCode === 0) {

            dispatch(setUserData(null, null, null, false));
        }
    })
}

export default authReducer;