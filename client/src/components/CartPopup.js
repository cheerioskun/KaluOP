import React, { Component } from 'react';
import { Item, Button, List, Header } from 'semantic-ui-react';
import CartItem from './CartItem';
class CartPopup extends Component {
    render() {
        return (
            <List divided>
                <List.Item>
                    <Item.Group divided>
                        {this.props.cart.map(item => <CartItem item={item} />)}
                    </Item.Group>
                </List.Item>
                <List.Item>
                    <Header size='small' floated='left'>Total: </Header>
                    <Header size='small' floated='right'>{this.props.cart.map(item => item.unitPrice * item.qty).reduce((a, b) => a + b, 0)}</Header>
                </List.Item>
                <List.Item>
                    <Button color="green" content="Checkout" icon="arrow right" labelPosition='right' fluid />
                </List.Item>

            </List >

        );
    }
}

export default CartPopup;