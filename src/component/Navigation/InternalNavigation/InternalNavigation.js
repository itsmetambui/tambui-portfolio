import React from 'react';
import classes from './InternalNavigation.module.scss';

//TODO: handle routing
const internalNavigation = props => {
    const links = navigationItems.map(item => {
        return (
            <a key={item.text} href="">
                <i className={item.icon} />
                <span>{item.text}</span>
            </a>
        );
    });
    const toggleClass = props.toggle ? classes.Show : '';

    return <nav className={[classes.InternalNav, toggleClass].join(' ')}>{links}</nav>;
};

export default internalNavigation;

const navigationItems = [
    {
        icon: 'fal fa-home',
        text: 'Home',
        route: ''
    },
    {
        icon: 'fal fa-user',
        text: 'About',
        route: ''
    },
    {
        icon: 'fal fa-fire',
        text: 'Skills',
        route: ''
    },
    {
        icon: 'fal fa-book',
        text: 'My work',
        route: ''
    },
    {
        icon: 'fal fa-home',
        text: 'Contact',
        route: ''
    }
];
