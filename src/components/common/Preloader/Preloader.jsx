import React from "react";
import classes from './Preloader.module.css';
import loader from "../../../img/loader.svg";

const Preloader = (props) => {
    return (
        <>
            <img src={loader}/>
        </>
    )
}



export default Preloader;