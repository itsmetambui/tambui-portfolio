import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import Header from '../UI/Header/Header';
import ShowCase from './ShowCase/ShowCase';
import classes from './Works.module.scss';

const works = () => {
    return (
        <Wrapper>
            <div className={classes.Works}>
                <div className={classes.TextArea}>
                    <Header text="Projects" />
                </div>
                <div className={classes.Projects}>
                    <ShowCase />
                </div>
            </div>
        </Wrapper>
    );
};

export default works;
