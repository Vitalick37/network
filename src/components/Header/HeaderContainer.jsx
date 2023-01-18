import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./Header";
import { setUserData, getAuthUserData, logout } from "../../redux/authReducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }



    render () {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    })
}

export default connect (mapStateToProps, {logout})(HeaderContainer);
