import React, { Component } from 'react';
import { Segment, Visibility, Container, Header, Card, Transition } from 'semantic-ui-react';
import MenuItem from './MenuItem';
import { fetchMenu } from '../api/index.js';

class Menu extends Component {
    constructor() {
        super();
        this.state = { isLoading: true, menuItems: [], visible: false };
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.makeVisible = this.makeVisible.bind(this);
    }
    componentDidMount() {
        fetchMenu().then(
            data => this.setState({ menuItems: [...data.data] })
        ).catch(error => console.log(error));

    }
    showMenu = () => { this.setState({ menu: true }) };
    hideMenu = () => { this.setState({ menu: false }) };
    makeVisible = () => { this.setState({ visible: true }) };
    render() {
        const columnCount = 3;

        return (
            <div id="menu">
                <Visibility onTopVisible={this.makeVisible} once>
                    <Transition visible={this.state.visible} animation='scale' duration={1000}>
                        <Segment padded='very'>
                            <Container textAlign='center'>
                                <Header style={{ padding: '0.2em', fontSize: '8em', fontFamily: 'Amigo', color: 'grey', '-webkit-text-stroke': "2px white" }}>MENU</Header>
                            </Container>
                            <Card.Group
                                itemsPerRow={columnCount}
                                stackable
                            >
                                {this.state.menuItems.map(item => <MenuItem item={item} handlers={this.props.handlers} />)}
                            </Card.Group>
                        </Segment>

                    </Transition>
                </Visibility>
            </div>
        );
    }
}

export default Menu;