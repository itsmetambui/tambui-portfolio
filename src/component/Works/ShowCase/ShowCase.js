import React, { Component } from 'react';
import './ShowCase.scss';
import mixitup from 'mixitup';

class ShowCase extends Component {
    componentDidMount() {
        var containerEl = document.querySelector('.showcase-container');
        mixitup(containerEl);
    }

    render() {
        const cards = projects.map(prj => {
            return (
                <div class={['mix', prj.category].join(' ')} style={{ background: prj.thumb }}>
                    {prj.name}
                </div>
            );
        });
        return (
            <React.Fragment>
                <div class="controls">
                    <button type="button" class="control" data-filter="all">
                        All
                    </button>
                    <button type="button" class="control" data-filter=".js">
                        Green
                    </button>
                    <button type="button" class="control" data-filter=".react">
                        Blue
                    </button>
                    <button type="button" class="control" data-filter=".node">
                        Pink
                    </button>
                    <button type="button" class="control" data-filter=".design">
                        None
                    </button>
                </div>

                <div class="showcase-container">{cards}</div>
            </React.Fragment>
        );
    }
}

export default ShowCase;

const projects = [
    {
        thumb: 'red',
        github: '',
        name: 'Forkify',
        catagoryDisplay: '',
        category: 'js react'
    },
    {
        thumb: 'blue',
        github: '',
        name: 'Node master class',
        catagoryDisplay: '',
        category: 'node js'
    },
    {
        thumb: 'purple',
        github: '',
        name: 'Hamburger',
        catagoryDisplay: '',
        category: 'js react'
    },
    {
        thumb: 'black',
        github: '',
        name: 'Fullstack course',
        catagoryDisplay: '',
        category: 'js node react'
    },
    {
        thumb: 'yellow',
        github: '',
        name: 'Web dev',
        catagoryDisplay: '',
        category: 'design'
    },
    {
        thumb: 'green',
        github: '',
        name: 'Wallet',
        catagoryDisplay: '',
        category: 'js'
    }
];
