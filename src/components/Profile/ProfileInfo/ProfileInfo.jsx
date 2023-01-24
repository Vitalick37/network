import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    } 

        return (
        <div className={styles.content__ability}>
            <img src={props.profile.photos.small} alt="photo" />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <p>What’s your plan?</p>
            <p>Looks like a shady day</p>
            <p>36°</p>
        </div>
        );

    

};

export default ProfileInfo;
