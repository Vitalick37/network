import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAithRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps = (state) => {
  return({
    dialog: state.messagesPage.dialogsData,
    message: state.messagesPage.messagesData,
    newMessage: state.messagesPage.newMessageText,
    // isAuth: state.auth.isAuth,
  })
}

let mapDispatchToProps = (dispatch) => {
  return({
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
    // updateNewMessageText: (text) => {
    //   dispatch(updateNewMessageTextActionCreator(text));
    // },
  })
}

export default  compose(connect(mapStateToProps, mapDispatchToProps),  withAithRedirect,)(Dialogs);

// let AuthRedirectComponent = withAithRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;
