import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile, getUsersProfile, getStatus, updateStatus, savePhoto } from "../../redux/profileReducer";
import { connect } from "react-redux";
import {useParams} from "react-router-dom";
import { usersAPI } from "../../api/api";
import { Navigate } from "react-router-dom";
import { withAithRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children){
  return(props)=>{

    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
}
}

class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  refreshProfile() {
        let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push('/login');
      }
    }

    // axios.get(
    //   `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    // )


    // usersAPI.getProfile(userId)
    // .then((response) => {
    //   this.props.setUserProfile(response.data);
    // });

    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }


  render () {

    
    return (
      <Profile savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    );
  }
};



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});
// let AuthRedirectComponent = withAithRedirect(ProfileContainer);

// let WithUrlData = withRouter(AuthRedirectComponent);

// export default connect (mapStateToProps, {getUsersProfile}) (WithUrlData);
export default compose(
    connect (mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto}), 
    withRouter, 
    withAithRedirect,
  )(ProfileContainer);
