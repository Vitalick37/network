import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduser';

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: dialogsReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;