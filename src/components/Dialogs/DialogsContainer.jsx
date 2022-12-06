import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";



// const DialogsContainer = (props) => {

//   let state = props.store.getState();


//   let addElementMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }

//   let onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   }

//   return (
//     <Dialogs 
//       addMessage={addElementMessage} 
//       updateNewMessageText={onMessageChange}
//       dialog={state.messagesPage.dialogsData}
//       message={state.messagesPage.messagesData}
//       newMessage={state.messagesPage.newMessageText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return({
    dialog: state.messagesPage.dialogsData,
    message: state.messagesPage.messagesData,
    newMessage: state.messagesPage.newMessageText,
  })
}
let mapDispatchToProps = (dispatch) => {
  return({
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
