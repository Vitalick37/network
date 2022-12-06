import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
    <div className={styles.dialog__item}>
        <div className={styles.post__avatar}></div>
        <NavLink className={styles.dialog__link} to={path}>
        {props.name}
        </NavLink>
    </div>
    );
};

export default DialogsItem;
