import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduser';
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: dialogsReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;