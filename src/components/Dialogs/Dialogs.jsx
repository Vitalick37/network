import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

  let newElementMessage = React.createRef();

  let addElementMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newElementMessage.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={styles.dialog}>

      <ul className={styles.dialog__list}>
        {props.stateDialogs.dialogsData.map((e) => (
          <DialogsItem name={e.name} id={e.id} key={e.id} />
        ))}
      </ul>

      <div>

        <div className={styles.messages}>
          {props.stateDialogs.messagesData.map((e) => (
            <MessageItem message={e.message} key={e.id} />
          ))}
        </div>

        <div className={styles.addmessage}>
          <textarea ref={newElementMessage} onChange={onMessageChange} name="text" cols="20" rows="5" value={props.stateDialogs.newMessageText} />
          <button onClick={addElementMessage}>add message</button>
        </div>

      </div>

    </div>
  );
};

export default Dialogs;
