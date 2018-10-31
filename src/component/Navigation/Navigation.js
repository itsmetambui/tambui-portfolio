import React, { Component } from 'react';
import classes from './Navigation.module.scss';
import logoImg from '../../assets/img/favicon.png';

import Logo from './Logo/Logo';
import InternalNavigation from './InternalNavigation/InternalNavigation';
import ExternalNavigation from './ExternalNavigation/ExternalNavigation';

class Navigation extends Component {
    state = {
        showInternalNav: false
    };

    toggleInternalNav = () => {
        this.setState({ showInternalNav: !this.state.showInternalNav });
    };

    render() {
        return (
            <div className={classes.Header}>
                <Logo imgSrc={logoImg} text="Tam" />
                <InternalNavigation toggle={this.state.showInternalNav} />
                <ExternalNavigation />

                <button className={classes.NavToggle} onClick={this.toggleInternalNav}>
                    <i className="fas fa-bars" />
                </button>
            </div>
        );
    }
}

export default Navigation;
