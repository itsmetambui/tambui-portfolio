import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const logo = props => {
    return (
        <Link className={classes.Logo} to="/">
            <img src={props.imgSrc} alt="Logo" />
            <span>{props.text}</span>
        </Link>
    );
};

export default logo;
//TODO: implement routing when click logo
