import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class CartItem extends Component {
    render() {
        return (
            <Item>
                <Item.Image src={'data:img/png;base64,' + this.props.item.image} size='tiny' verticalAlign='middle' />
                <Item.Content verticalAlign="middle">
                    <Item.Header>{this.props.item.itemName}</Item.Header>
                    <Item.Meta>Qty: {this.props.item.qty}</Item.Meta>
                    <Item.Description>Cost: {this.props.item.qty * this.props.item.unitPrice}.00</Item.Description>
                </Item.Content>
            </Item>
        );
    }
}

export default CartItem;