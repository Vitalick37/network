
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initalState = {
    users: [
        // {
        //     id: 1,
        //     firstName: "Dmitriy",
        //     photoUrl: 'https://cs6.pikabu.ru/avatars/404/x404070-828004264.png',
        //     followed: true,
        //     status: "i`m here",
        //     location: {
        //     city: "St. Petersburg",
        //     country: "Russia",
        //     },
        // },
        // {
        //     id: 2,
        //     firstName: "Ivan",
        //     photoUrl: 'https://cs6.pikabu.ru/avatars/404/x404070-828004264.png',
        //     followed: false,
        //     status: "i`m here",
        //     location: {
        //     city: "Moscow",
        //     country: "Russia",
        //     },
        // },
        // {
        //     id: 3,
        //     firstName: "Anna",
        //     photoUrl: 'https://cs6.pikabu.ru/avatars/404/x404070-828004264.png',
        //     followed: true,
        //     status: "i`m here",
        //     location: {
        //     city: "Saratov",
        //     country: "Russia",
        //     },
        // },
        // {
        //     id: 4,
        //     firstName: "Alina",
        //     photoUrl: 'https://cs6.pikabu.ru/avatars/404/x404070-828004264.png',
        //     followed: false,
        //     status: "i`m here",
        //     location: {
        //     city: "Ufa",
        //     country: "Russia",
        //     },
        // },
    ],
};

const usersReducer = (state = initalState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
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
                users: [...state.users, ...action.users],
            }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
