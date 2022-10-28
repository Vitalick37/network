import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

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

const Dialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={styles.dialog__item}>
      <NavLink className={styles.dialog__link} to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialog}>
      <ul className={styles.dialog__list}>
        {dialogsData.map(e => <Dialog name={e.name} id={e.id} key={e.id}/>)}

      </ul>

      <div className={styles.messages}>
        {messagesData.map(e => <Message message={e.message} key={e.id}/>)}

      </div>
    </div>
  );
};

export default Dialogs;
