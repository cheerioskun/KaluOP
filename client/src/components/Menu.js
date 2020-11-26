import React, { Component } from 'react';
import { Segment, Visibility } from 'semantic-ui-react';

class Menu extends Component {
    constructor(){
        super();
        this.state = {isLoading: true};
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    showMenu = () => {this.setState({menu: true})};
    hideMenu = () => {this.setState({menu: false})};
    render() {
        return (
            <div>
                <Visibility>
                    <Segment raised>

                    </Segment>

                </Visibility>
            </div>
        );
    }
}

export default Menu;