import React, { Component } from 'react';
import './ShowCase.scss';
import mixitup from 'mixitup';
import $ from 'jquery';

import natoursImg from '../../../assets/img/natours.png';
import trillioImg from '../../../assets/img/trillio.png';
import ilovelampImg from '../../../assets/img/ilovelamp.png';
import vutachatImg from '../../../assets/img/vutachat.png';
import spacexplorerImg from '../../../assets/img/spacexplorer.png';
import feedorImg from '../../../assets/img/feedor.png';

class ShowCase extends Component {
    componentDidMount() {
        const firstTab = document.getElementsByClassName('filter')[0];
        this.posFilterBar(firstTab);
        var containerEl = document.querySelector('.showcase-container');
        mixitup(containerEl);
    }

    changeTab = e => {
        this.posFilterBar(e.target);
    };

    posFilterBar = element => {
        var origin = $(element)
            .parent()
            .offset().left;
        var pos = $(element).offset().left;
        $('.float-bar').css({
            left: pos - origin,
            width: $(element).innerWidth()
        });
        $('.float-bar .row').css('left', (pos - origin) * -1);
    };

    render() {
        const cards = projects.map((prj, idx) => {
            return (
                <div key={idx} className={['mix', ...prj.category].join(' ')}>
                    <img src={prj.thumb} alt="project thumbnail" />
                    <div className="links">
                        {prj.inprogress ?
                            <p>In progress</p> :
                            <>
                                <a href={prj.github} target="_blank" rel="noopener noreferrer">Github</a>
                                <a href={prj.live} target="_blank" rel="noopener noreferrer">Live</a>
                            </>
                        }
                    </div>
                </div>
            );
        });
        const tabs = Object.keys(categories).map(key => {
            return (
                <div key={key} className="filter" data-filter={`.${categories[key]}`} onClick={this.changeTab}>
                    {categories[key].toUpperCase()}
                </div>
            );
        });
        return (
            <div className="showcase">
                <div className="filter-wrap">
                    <div className="flex row">
                        <div className="filter" data-filter="all" onClick={this.changeTab}>
                            ALL
                        </div>
                        {tabs}
                    </div>
                    <div className="float-bar">
                        <div className="flex row">
                            <div className="filter" data-filter="all">
                                ALL
                            </div>
                            {tabs}
                        </div>
                    </div>
                </div>

                <div className="showcase-container">{cards}</div>
            </div>
        );
    }
}

export default ShowCase;

const categories = {
    personal: 'personal',
    work: 'work',
};

const projects = [
    {
        thumb: natoursImg,
        github: 'https://github.com/itsmetambui/natours',
        live: 'https://tb-natours.now.sh/',
        name: 'Natours',
        categoryDisplay: 'HTML/CSS',
        category: [categories.personal]
    },
    {
        thumb: trillioImg,
        github: 'https://github.com/itsmetambui/trillio',
        live: 'https://tb-trillio.now.sh/',
        name: 'Trillio',
        categoryDisplay: 'HTML/CSS',
        category: [categories.personal]
    },
    {
        thumb: spacexplorerImg,
        github: 'https://github.com/itsmetambui/spacexplorer',
        live: 'https://spacexplorer.now.sh/',
        name: 'Spacexplorer',
        categoryDisplay: 'React + Express + GraphQL',
        category: [categories.personal]
    },
    {
        thumb: ilovelampImg,
        github: 'https://github.com/itsmetambui/react-demo-store',
        live: 'https://tb-ilovelamp.now.sh',
        name: 'I Love Lamp',
        categoryDisplay: 'React + Redux',
        category: [categories.personal]
    },
    {
        thumb: vutachatImg,
        github: 'https://github.com/itsmetambui/vutachat',
        live: 'https://vutachat.herokuapp.com/',
        name: 'Vutachat',
        categoryDisplay: 'React + Node',
        category: [categories.personal]
    },
    {
        thumb: feedorImg,
        github: 'https://github.com/itsmetambui/feedor',
        live: 'https://feedor.herokuapp.com/',
        name: 'Feedor',
        categoryDisplay: 'React + Redux + Loopback',
        inprogress: true,
        category: [categories.work]
    },
];
