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
                isAuth: true,
            }

            default:
                return state;

    }

}

export const setUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuth()
    .then((data) => { 
        // debugger;
        if( data.resultCode === 0) {

            let {id, login, email} = data.data;
            dispatch(setUserData(id, login, email));
        }
    })
}

export default authReducer;