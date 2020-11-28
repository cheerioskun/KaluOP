import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
  Popup,
  Item
} from 'semantic-ui-react';


class Landing extends Component {
  constructor() {
    super();
    this.state = { navFixed: false };
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.height = window.innerHeight;
  }
  hideFixedMenu = () => this.setState({ navFixed: false });
  showFixedMenu = () => this.setState({ navFixed: true });
  render() {
    const { children } = this.props;
    const { navFixed } = this.state;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: this.height, padding: '1em 0em' }}
          vertical
        >
          <Menu
            navFixed={navFixed ? 'top' : null}
            inverted={!navFixed}
            pointing={!navFixed}
            secondary={!navFixed}
            size='large'
          >
            <Container>
              <Menu.Item as='a' active>
                Home
                    </Menu.Item>
              <Menu.Item as='a' href='#menu'>Menu</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!navFixed} primary={navFixed} icon='search' />
                <Popup wide
                  position='bottom center'
                  trigger={<Button as='a' inverted={!navFixed} content='Cart' icon='cart' labelPosition='left' style={{ marginLeft: '0.5em' }} />}
                  on='click'

                >
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

                </Popup>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    );
  }
}

export default Landing;