import styles from './ProfileStatus.module.css';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })
        // this.state.editMode = true;
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange= (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {

        return (
            <>
            {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '------'}</div>
            }
            {this.state.editMode &&
                <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.state.status}/></div>
            }
            </>
        )
    }

}



export default ProfileStatus;