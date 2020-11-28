import React, { Component } from 'react';
import { Segment, Visibility, Container, Header, Grid } from 'semantic-ui-react';
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
        const menuItemComponents = this.state.menuItems.map(menuItem => <Grid.Column><MenuItem item={menuItem} /></Grid.Column>);
        const menuGridRows = [];
        let i = 0;
        while (3 * i < menuItemComponents.length) {
            let j = 0;
            let temp = [];
            while (j < columnCount && 3 * i + j < menuItemComponents.length) {
                temp.push(menuItemComponents[3 * i + j]);
                j++;
            }
            menuGridRows.push(temp);
            i++;
        }
        return (
            <div>
                <Visibility>
                    <Segment raised id="menu">
                        <Container textAlign='center'>
                            <Header style={{ padding: '1em', fontSize: '3em' }}>Menu</Header>
                        </Container>
                        <Grid columns={columnCount} divided>
                            {menuGridRows.map(row => <Grid.Row>{row}</Grid.Row>)}
                        </Grid>
                    </Segment>

                </Visibility>
            </div>
        );
    }
}

export default Menu;