import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import Header from '../UI/Header/Header';
import classes from './About.module.scss';
import photoSrc from '../../assets/img/tambui-photo.jpg';

const about = () => {
    return (
        <Wrapper>
            <div className={classes.About}>
                <div className={classes.TextArea}>
                    <Header text="My dev career" />

                    <p className={classes.Journey}>
                        A highly driven and motivated developer with over four years’ experience in web development.
                    </p>
                    <p className={classes.Journey}>
                        In 2016, I got my first job as a junior frontend developer at{' '}
                        <a href="https://www.tma.vn/" target="_blank" rel="noopener noreferrer">
                            TMA Solutions
                        </a>{' '}
                        in HCM, Vietnam. I had the opportunity working with highly experienced partners like Nokia, building
                        large Single Page Applications for networking management solutions.
                    </p>

                    <p className={classes.Journey}>
                        Two years later I moved to Can Tho and started to work for{' '}
                        <a href="https://codeberryschool.com/" target="_blank" rel="noopener noreferrer">
                            CodeBerry code school
                        </a>
                        . Here, we work as a multi-national, 100% remote team, applied Agile development through Scrum framework, develop interactive coding education platform.
                    </p>

                    <p className={classes.Journey}>
                        From 2019,{' '}
                        <a href="http://spacestep.ca//" target="_blank" rel="noopener noreferrer">
                            Spacestep
                        </a>
                        , a remote dev agency, became my new challenge. Here I can round out my skill as a fullstack developer,
                        with various freelancing projects.
                    </p>
                </div>
                <div className={classes.ImageArea}>
                    <img src={photoSrc} alt="Avatar" />
                </div>
            </div>
        </Wrapper>
    );
};

export default about;
