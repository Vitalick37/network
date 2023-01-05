import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { Navigate } from 'react-router-dom';
import { reduxForm, Field } from "redux-form";



const Dialogs = (props) => {


  // let newElementMessage = React.createRef();

  // let addElementMessage = () => {
  //   // props.dispatch(addMessageActionCreator());
  //   props.addMessage();
  // }

  // let onMessageChange = (e) => {
  //   let text = e.target.value;
  //   props.updateNewMessageText(text);
  // }

  let addNewMessage = (value) => {
    props.addMessage(value.newMessageBody);
  }

  // if(props.isAuth == false) {
  //   return <Navigate to={'/login'} />
  // };

  return (
    <div className={styles.dialog}>

      <ul className={styles.dialog__list}>
        {props.dialog.map((e) => (
          <DialogsItem name={e.name} id={e.id} key={e.id} />
        ))}
      </ul>

      <div>

        <div className={styles.messages}>
          {props.message.map((e) => (
            <MessageItem message={e.message} key={e.id} />
          ))}
        </div>

            <AddMessageFormRedux onSubmit={addNewMessage} />

      </div>

    </div>
  );
};

const AddMessageForm = (props) => {
  return (

    <form onSubmit={props.handleSubmit} className={styles.addmessage}>

      <Field component='textarea' name='newMessageBody' placeholder="enter your message"/>
      <button>add message</button>
      {/* <textarea onChange={onMessageChange} name="text" cols="20" rows="5" value={props.newMessage} /> */}
      {/* <button onClick={addElementMessage}>add message</button> */}

    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
