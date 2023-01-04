import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./Header";
import { setUserData, getAuthUserData } from "../../redux/authReducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.getAuthUserData();
        // usersAPI.getAuth()
        // .then((data) => { 
        //     // debugger;
        //     if( data.resultCode === 0) {

        //         let {id, login, email} = data.data;
        //         this.props.setUserData(id, login, email);

        //     }
        // })
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

export default connect (mapStateToProps, {getAuthUserData,})(HeaderContainer);
