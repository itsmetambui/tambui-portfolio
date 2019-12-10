import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';

import Navigation from './component/Navigation/Navigation';
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Works from './component/Works/Works';
import Contact from './component/Contact/Contact';
import './App.scss';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS_KEY);
    ReactGA.pageview('/home');
}

const App = () => {

    useEffect(() => {
        initializeReactGA();
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <div className="Header">
                    <Navigation />
                </div>
                <div className="Frame">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/works" component={Works} />
                        <Route path="/contact" component={Contact} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
