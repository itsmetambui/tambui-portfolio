import React from 'react';
import classes from './Header.module.scss';

const header = props => {
    return (
        <div className={classes.Header}>
            <h1>{props.text}</h1>
        </div>
    );
};

export default header;
