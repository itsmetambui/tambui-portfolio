import React, { Component } from 'react';
import classes from './Navigation.module.scss';
import logoImg from '../../assets/img/favicon.png';

import Logo from './Logo/Logo';
import InternalNavigation from './InternalNavigation/InternalNavigation';

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
                {/* <ul class="external-nav">
                <li>
                    <a href="">
                        <i class="fab fa-linkedin-in" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fab fa-facebook-f" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="fab fa-github-alt" />
                    </a>
                </li>
            </ul> */}

                <a className={classes.NavToggle} onClick={this.toggleInternalNav}>
                    <i className="fas fa-bars" />
                </a>
            </div>
        );
    }
}

export default Navigation;
