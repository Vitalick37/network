import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return({
    dialog: state.messagesPage.dialogsData,
    message: state.messagesPage.messagesData,
    newMessage: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth,
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
