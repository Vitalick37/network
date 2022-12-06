import { NavLink } from 'react-router-dom';
import styles from './FriendItem.module.css';

const FriendItem = (props) => {
    let url = '/friends/' + props.idItem;
    return  (
        <li className={styles.friends__item}>
            <div className={styles.friends__avatar}></div>
            <NavLink className={styles.friends__link} to={url}>{props.nameItem}</NavLink>
            </li>
    )
}



export default FriendItem;