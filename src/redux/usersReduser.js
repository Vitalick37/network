import { usersAPI } from "../api/api";
import { updateObjInArray } from "../utils/objectHelper";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initalState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initalState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: updateObjInArray(state.users, action.userId, 'id', {followed: true}),
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
                
            };

        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS: 
            return {
                ...state,
                users: action.users,
            }

        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.count,
            }

        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching,
            }

        case TOGGLE_IS_FOLLOWING: 
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId ] 
                    : state.followingInProgress.filter(id => id !== action.userId),
            }

        default:
            return state;
    }
};

export const acceptFollowAC = (userId) => ({type: FOLLOW, userId});
export const acceptUnFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {

    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}


export const follow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId));

        usersAPI.getFollow(userId)
            .then((data) => {
            // debugger;
            if (data.resultCode === 0) {
                dispatch(acceptFollowAC(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
            });
    }
} 

export const unFollow = (userId) => {

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId));

        usersAPI.getUnFollow(userId)
        .then((data) => {
            // debugger;
            if (data.resultCode === 0) {
                dispatch(acceptUnFollowAC(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
            });
    }
}

export default usersReducer;
