import styles from './MessageItem.module.css';

const MessageItem = (props) => {
    return (

            <div className={styles.message__wrapper}>
                <div className={styles.message}>{props.message}</div>
            </div>

    )
}



export default MessageItem;