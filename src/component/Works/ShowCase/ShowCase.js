import React, { Component } from 'react';
import './ShowCase.scss';
import mixitup from 'mixitup';
import $ from 'jquery';
import thumb1 from '../../../assets/img/thumb-1.jpg';
import thumb2 from '../../../assets/img/thumb-2.jpg';
import thumb3 from '../../../assets/img/thumb-3.jpg';
import thumb4 from '../../../assets/img/thumb-4.jpg';
import thumb5 from '../../../assets/img/thumb-5.jpg';
import thumb6 from '../../../assets/img/thumb-6.jpg';

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
                </div>
            );
        });
        const tabs = Object.keys(categories).map(key => {
            return (
                <div key={key} className="filter" data-filter={`.${categories[key]}`} onClick={this.changeTab}>
                    {key.toUpperCase()}
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
    javascript: 'js',
    node: 'node',
    react: 'react',
    design: 'design'
};

const projects = [
    {
        thumb: thumb1,
        github: '',
        name: 'Forkify',
        categoryDisplay: 'React + Webpack',
        category: [categories.react, categories.javascript]
    },
    {
        thumb: thumb2,
        github: '',
        name: 'Node master class',
        categoryDisplay: 'Node + JS',
        category: [categories.node]
    },
    {
        thumb: thumb3,
        github: '',
        name: 'Hamburger',
        categoryDisplay: 'React only',
        category: [categories.react, categories.javascript]
    },
    {
        thumb: thumb4,
        github: '',
        name: 'Fullstack course',
        categoryDisplay: 'Node + React + JS',
        category: [categories.react, categories.javascript, categories.node]
    },
    {
        thumb: thumb5,
        github: '',
        name: 'Web dev',
        categoryDisplay: 'HTML/CSS',
        category: [categories.design]
    },
    {
        thumb: thumb6,
        github: '',
        name: 'Wallet',
        categoryDisplay: 'Pure Javascript',
        category: [categories.javascript]
    }
];
