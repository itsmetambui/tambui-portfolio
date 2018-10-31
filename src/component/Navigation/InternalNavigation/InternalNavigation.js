import React from 'react';
import classes from './InternalNavigation.module.scss';
import { NavLink } from 'react-router-dom';

//TODO: handle routing
const internalNavigation = props => {
    const links = navigationItems.map(item => {
        return (
            <NavLink key={item.text} to={item.route} activeClassName={classes.active} exact>
                <i className={item.icon} />
                <span>{item.text}</span>
            </NavLink>
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
        route: '/'
    },
    {
        icon: 'fal fa-user',
        text: 'About',
        route: '/about'
    },
    {
        icon: 'fal fa-fire',
        text: 'Skills',
        route: '/skills'
    },
    {
        icon: 'fal fa-book',
        text: 'My work',
        route: '/works'
    },
    {
        icon: 'fal fa-envelope',
        text: 'Contact',
        route: '/contact'
    }
];
