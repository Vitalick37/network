import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';




const Dialogs = (props) => {
  return (
    <div className={styles.dialog}>
      <ul className={styles.dialog__list}>
        {props.stateDialogs.dialogsData.map(e => <DialogsItem name={e.name} id={e.id} key={e.id}/>)}
      </ul>

      <div className={styles.messages}>
        {props.stateDialogs.messagesData.map(e => <MessageItem message={e.message} key={e.id}/>)}
      </div>
    </div>
  );
};

export default Dialogs;
