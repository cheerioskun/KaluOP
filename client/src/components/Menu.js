import React, { Component } from 'react';
import { Segment, Visibility, Container, Header, Grid, Card } from 'semantic-ui-react';
import MenuItem from './MenuItem';
import { fetchMenu } from '../api/index.js';

class Menu extends Component {
    constructor() {
        super();
        this.state = { isLoading: true, menuItems: [] };
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);

    }
    showMenu = () => { this.setState({ menu: true }) };
    hideMenu = () => { this.setState({ menu: false }) };

    render() {
        const columnCount = 3;
        fetchMenu().then(
            data => this.setState({ menuItems: [...data.data] })
        ).catch(error => console.log(error));

        return (
            <div>
                <Visibility>
                    <Segment raised id="menu">
                        <Container textAlign='center'>
                            <Header style={{ padding: '1em', fontSize: '3em' }}>Menu</Header>
                        </Container>
                        <Card.Group
                            itemsPerRow={columnCount}
                            stackable
                        >
                            {this.state.menuItems.map(item => <MenuItem item={item} handlers={this.props.handlers} />)}
                        </Card.Group>
                    </Segment>

                </Visibility>
            </div>
        );
    }
}

export default Menu;