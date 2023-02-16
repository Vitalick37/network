import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userNoName from "../../../img/userNoName.jpg";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    } 

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        };
    }

        return (
        <div className={styles.content__ability}>
            <img src={props.profile.photos.small || userNoName} className={styles.content__img} alt="photo" />

            { props.isOwner && <input className={styles.content__btn} type={'file'} onChange={onMainPhotoSelected} /> }

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <p>What’s your plan?</p>
            <p>Looks like a shady day</p>
            <p>36°</p>
        </div>
        );

    

};

export default ProfileInfo;
