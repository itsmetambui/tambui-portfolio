import React from 'react';
import { Link } from 'react-router-dom';
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
                        Fullstack developer /
                        <span> React / Node /</span>
                        <span> Mongo / Postgres /</span>
                        <span> AWS / Docker ...</span>
                    </p>
                    <Link className={classes.Contact} to="/contact">
                        Contact me
                    </Link>
                </div>
                <div className={classes.ImageArea}>
                    <img src={logoSrc} alt="Logo" />
                </div>
            </div>
        </Wrapper>
    );
};

export default home;
