import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import { Navigate } from 'react-router-dom';



const Dialogs = (props) => {


  // let newElementMessage = React.createRef();

  let addElementMessage = () => {
    // props.dispatch(addMessageActionCreator());
    props.addMessage();
  }

  let onMessageChange = (e) => {
    // let text = newElementMessage.current.value;
    let text = e.target.value;
    // props.dispatch(updateNewMessageTextActionCreator(text));
    props.updateNewMessageText(text);
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

        <div className={styles.addmessage}>
          <textarea 
          // ref={newElementMessage} 
          onChange={onMessageChange} name="text" cols="20" rows="5" value={props.newMessage} />
          <button onClick={addElementMessage}>add message</button>
        </div>

      </div>

    </div>
  );
};

export default Dialogs;
