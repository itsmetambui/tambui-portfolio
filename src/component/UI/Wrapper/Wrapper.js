import React from 'react';
import classes from './Wrapper.module.scss';

const wrapper = props => {
    return (
        <div className={classes.Wrapper}>
            <span className={classes.tags}>&nbsp;&nbsp;&lt;body&gt;</span>
            {props.children}
            <span className={classes.tags}>
                &nbsp;&nbsp;&lt;/body&gt;
                <br />
                &lt;/html&gt;
            </span>
        </div>
    );
};

export default wrapper;
