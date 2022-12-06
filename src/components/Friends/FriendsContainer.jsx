import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friends.module.css";
import FriendItem from "./FriendItem/FriendItem";
import { connect } from "react-redux";
import Friends from "./Friends"

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.FriendsData,
    }
    }
    
    let mapDispatchToProps = (dispatch) => {
    
    return {
    
    }
    }
    
    const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
    
    export default FriendsContainer;