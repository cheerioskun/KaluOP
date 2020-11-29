import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class CartPopup extends Component {
    render() {
        return (
            <Item.Group>
                {this.props.cart.map(item =>
                    <Item>
                        <Item.Content>
                            <Item.Header>{item.itemName}</Item.Header>
                            <Item.Meta>Qty: {item.qty}</Item.Meta>
                            <Item.Description>Total Cost: {item.qty * item.unitPrice}.00</Item.Description>
                        </Item.Content>
                    </Item>)}
            </Item.Group>
        );
    }
}

export default CartPopup;