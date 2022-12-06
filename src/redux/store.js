import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from './sidebarReducer';


let store = {
  _state: {
    profilePage: {
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
    },

    messagesPage: {
      dialogsData: [
        {
          id: 1,
          name: "Dmitriy",
        },
        {
          id: 2,
          name: "Andrey",
        },
        {
          id: 3,
          name: "Sveta",
        },
        {
          id: 4,
          name: "Sasha",
        },
        {
          id: 5,
          name: "Alina",
        },
      ],
      messagesData: [
        {
          id: 1,
          message: "Hello",
        },
        {
          id: 2,
          message: "How are you",
        },
        {
          id: 3,
          message: "i`m fine",
        },
      ],
      newMessageText: "",
    },

    sidebar: {
      friendsData: [
        {
          id: 1,
          name: "Dmitriy",
        },
        {
          id: 2,
          name: "Andrey",
        },
        {
          id: 3,
          name: "Sveta",
        },
      ],
    }
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("37");
  },

  // addPost() {
  //   let newPost = {
  //       id: 7,
  //       post: this._state.profilePage.newPostText,
  //       likesCount: 9,
  //   };
  //   this._state.profilePage.postData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  // addMessage() {
  //   let newMessage = {
  //     id: 3,
  //     message: this._state.messagesPage.newMessageText,
  //   };
  //   this._state.messagesPage.messagesData.push(newMessage);
  //   this._state.messagesPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMessage) {
  //   this._state.messagesPage.newMessageText = newMessage;
  //   this._callSubscriber(this._state);
  // },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },
};





export default store;
window.store = store;
