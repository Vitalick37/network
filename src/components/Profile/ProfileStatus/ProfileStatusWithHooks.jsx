import styles from './ProfileStatus.module.css';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <>
            {!editMode &&
                <div onDoubleClick={activateEditMode}>{props.status || '------'}</div>
            }
            {editMode &&
                <div><input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange} value={status} /></div>
            }
            </>
        )

}



export default ProfileStatusWithHooks;