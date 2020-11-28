import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
class MenuItem extends Component {

    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.item.itemName}</Card.Header>
                    <Card.Meta className="ui green">Vegetarian</Card.Meta>
                    <Card.Description>Just some description</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button basic color="green">Add to Cart</Button>
                </Card.Content>
            </Card>
        );
    }
}

export default MenuItem;