import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
            <App 
                // stateData={state} 
                // dispatch={store.dispatch.bind(store)}
                // store={store}
            />
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


