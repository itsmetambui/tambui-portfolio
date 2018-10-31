import React, { Component } from 'react';
import Navigation from './component/Navigation/Navigation';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <Navigation />
                </div>
                <div className="Frame" />
            </div>
        );
    }
}

export default App;
