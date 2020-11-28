import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Contact from './components/Contact';
class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
        };
    }
    render() {
        return (
            <div>
                <Landing />
                <Menu />
                <Contact />
            </div>
        );
    }
}

export default App;