import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import classes from './Home.module.scss';
import logoSrc from '../../assets/img/favicon.png';

const home = () => {
    return (
        <Wrapper>
            <div className={classes.Home}>
                <div className={classes.TextArea}>
                    <h1 className={classes.Summary}>
                        Hi,
                        <br />
                        I'm Tam,
                        <br />
                        web developer.
                    </h1>
                    <p className={classes.Title}>
                        Fullstack developer /<span> Angular / React / Node</span>
                    </p>
                    <button className={classes.Contact}>Contact me</button>
                </div>
                <div className={classes.ImageArea}>
                    <img src={logoSrc} alt="Logo" />
                </div>
            </div>
        </Wrapper>
    );
};

export default home;
