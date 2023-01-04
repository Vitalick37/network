import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initalState = {
    postData: [
        {
        id: 1,
        post: "post 1",
        likesCount: 4,
        },
        {
        id: 2,
        post: "post 2",
        likesCount: 3,
        },
    ],
    newPostText: "",
    profile: null,
    status: '',
    };


const profileReducer = (state = initalState, action) => {


    switch(action.type) {

    case ADD_POST:{

        let newPost = {
            id: 7,
            post: state.newPostText,
            likesCount: 9,
        };
        return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: "",
        };
    
    }
    case UPDATE_NEW_POST_TEXT:

        return {
            ...state,
            newPostText: action.newText,
        };

    case SET_USER_PROFILE:

        return {...state, profile: action.profile}

    case SET_STATUS:
        
        return {...state, status: action.status}

    default: 

        return state;

    }

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 7,
    //         post: state.newPostText,
    //         likesCount: 9,
    //     };
    //     state.postData.push(newPost);
    //     state.newPostText = "";
    //     } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    //     }

    // return state;
}

export const addPostActionCreator = () => {
    return {type: ADD_POST,};
};

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text,};
    };

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUsersProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)
    .then((response) => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
    .then((response) => {
        
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    
    profileAPI.updateStatus(status)
    .then((response) => {
        
        if (response.data.resultCode === 0){
            
            dispatch(setStatus(status));
        }
    });
}


export default profileReducer;