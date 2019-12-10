import React from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import Header from '../UI/Header/Header';
import classes from './Skills.module.scss';
import TagCanvas from '../UI/TagCanvas/TagCanvas';

const skills = () => {
    return (
        <Wrapper>
            <div className={classes.Skills}>
                <div className={classes.TextArea}>
                    <Header text="Skills / Experiences" />

                    <p className={classes.Journey}>
                        Main area of my expertise is front end development and everything related with web development.
                        HTML, CSS, JS (ES5, ES6), building single page web applications with Angular, React...
                    </p>
                    <p className={classes.Journey}>
                        Often I work as a full-stack developer, experienced with backend development with Java, Node, and frameworks like
                        Express, Nestjs, and Spring.
                    </p>

                    <p className={classes.Journey}>
                        I have also some experience working with databases like PostgreSQL, MongoBD.
                    </p>
                </div>

                <div className={classes.SkillChart}>
                    <TagCanvas />
                </div>
            </div>
        </Wrapper>
    );
};

export default skills;
