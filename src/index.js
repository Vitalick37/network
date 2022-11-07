import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App 
        stateData={state} 
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        />
        </BrowserRouter>
    </React.StrictMode>
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


