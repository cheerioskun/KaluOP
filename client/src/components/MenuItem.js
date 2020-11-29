import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
class MenuItem extends Component {

    render() {
        return (
            <Card>
                <Image src={'data:img/png;base64,' + this.props.item.image} />
                <Card.Content>
                    <Card.Header>{this.props.item.itemName}</Card.Header>
                    <Card.Meta className="ui green">Vegetarian</Card.Meta>
                    <Card.Description>Just some description</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button floated='left' icon='rupee sign' content={this.props.item.unitPrice + '.00'} labelPosition='right' />
                    <Button.Group floated='right'>
                        <Button color='red' onClick={() => { this.props.handlers.cartHandler(this.props.item, 'remove') }}><Icon name='minus' /></Button>
                        <Button.Or text='or' />
                        <Button positive onClick={() => { this.props.handlers.cartHandler(this.props.item, 'add') }}><Icon name='plus' /></Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        );
    }
}

export default MenuItem;