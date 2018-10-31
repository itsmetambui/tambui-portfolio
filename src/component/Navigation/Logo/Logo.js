import React from 'react';
import classes from './Logo.module.scss';

const logo = props => {
    return (
        <a className={classes.Logo} href="">
            <img src={props.imgSrc} alt="Logo" />
            <span>{props.text}</span>
        </a>
    );
};

export default logo;
