import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
class MenuItem extends Component {

    render() {
        return (
            <div>
                <Header size='large'>{this.props.item.itemName}</Header>
                <Header size='medium'>Rs.{this.props.item.unitPrice}</Header>
            </div>
        );
    }
}

export default MenuItem;