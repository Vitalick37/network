const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initalState = {
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
    // newMessageText: "",
    };


const dialogsReducer = (state = initalState, action) => {

    switch(action.type) {

        case ADD_MESSAGE:
        
            let newMessage = {
                id: 4,
                message: action.newMessageBody,
            };

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                // newMessageText: '',
            };

        
        // case UPDATE_NEW_MESSAGE_TEXT:

        //     return {
        //         ...state,
        //         newMessageText: action.newMessage,
        //     };
        

        default: 

            return state;
    }

    // if (action.type === ADD_MESSAGE) {
    //     let newMessage = {
    //         id: 4,
    //         message: state.newMessageText,
    //     };
    //     state.messagesData.push(newMessage);
    //     state.newMessageText = "";
    //     } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //     state.newMessageText = action.newMessage;
    //     }

    // return state;
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody,
    };
    };

// export const updateNewMessageTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_TEXT,
//         newMessage: text,
//     };
//     };

export default dialogsReducer;