import React, { Component } from 'react';
import { Container, Item, Button, Grid, List } from 'semantic-ui-react';
import CartItem from './CartItem';
class CartPopup extends Component {
    render() {
        return (
            <List>
                <List.Item>
                    <Item.Group>
                        {this.props.cart.map(item => <CartItem item={item} />)}
                    </Item.Group>
                </List.Item>
                <List.Item>
                    <Button color="green" content="Checkout" icon="arrow right" labelPosition='right' fluid />
                </List.Item>

            </List>

        );
    }
}

export default CartPopup;