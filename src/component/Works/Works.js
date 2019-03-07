import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import { Link } from 'react-router-dom';
import classes from './Works.module.scss';

const works = () => {
    return (
        <div className={classes.Works}>
            <div className={classes.TextArea} />
            <div className={classes.Projects}>
                <ShowCase />
            </div>
            <p className={classes.Memo}>
                If you have any project ideas and want to convert it to real applications ? Please{' '}
                <Link to="/contact">contact</Link> me :)
            </p>
        </div>
    );
};

export default works;
