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
                    <Header text="About me" />

                    <p className={classes.Journey}>
                        A highly driven and motivated developer with over three years’ experience in web development.
                    </p>
                    <p className={classes.Journey}>
                        In 2016, I got my first job as a junior frontend developer at{' '}
                        <a href="https://www.tma.vn/" target="_blank" rel="noopener noreferrer">
                            TMA Solutions
                        </a>{' '}
                        in HCM, Vietnam. I had the chance working with highly experienced partners like Nokia, building
                        large Single Page Applications for networking.
                    </p>

                    <p className={classes.Journey}>
                        While woking at TMA Solution, I was also exposed to backend development with dockerization and
                        continous delivery.
                    </p>

                    <p className={classes.Journey}>
                        Two years later I moved to Can Tho and started to work for{' '}
                        <a href="https://www.axonactive.com/" target="_blank" rel="noopener noreferrer">
                            Axon Active Vietnam
                        </a>
                        . Here, as a multipnational team, we applied Agile development through Scrum framework, develop
                        and deploy Fintech applications for Swiss partners.
                    </p>

                    <p className={classes.Journey}>
                        I'm currently resigned from work to study and round out my skills to become a fullstack
                        developer, looking for the right opportunity to bring my expertise to a well-established
                        company.
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
