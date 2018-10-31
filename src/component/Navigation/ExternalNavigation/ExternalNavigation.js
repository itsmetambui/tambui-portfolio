import React from 'react';
import classes from './ExternalNavigation.module.scss';

const externalNavigation = () => {
    const links = navigationItems.map(item => {
        return (
            <li key={item.link}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i className={item.icon} />
                </a>
            </li>
        );
    });
    return <ul className={classes.ExternalNav}>{links}</ul>;
};

export default externalNavigation;

const navigationItems = [
    {
        icon: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com/in/tam-bui-a52112174/'
    },
    {
        icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/tam.builevu'
    },
    {
        icon: 'fab fa-github-alt',
        link: 'https://github.com/itsmetambui'
    }
];
