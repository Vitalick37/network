import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

let postData = [
  {
    id: 1,
    post: 'post 1',
    likesCount: 4,
  },
  {
    id: 2,
    post: 'post 2',
    likesCount: 3,
  },
]

let dialogsData = [
  {
    id: 1,
    name: 'Dmitriy',
  },
  {
    id: 2,
    name: 'Andrey',
  },
  {
    id: 3,
    name: 'Sveta',
  },
  {
    id: 4,
    name: 'Sasha',
  },
  {
    id: 5,
    name: 'Alina',
  },
]

let messagesData = [
  {
    id: 1,
    message: 'Hello',
  },
  {
    id: 2,
    message: 'How are you',
  },
  {
    id: 3,
    message: 'i`m fine',
  },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postData={postData} dialogData={dialogsData} messageData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>
);


