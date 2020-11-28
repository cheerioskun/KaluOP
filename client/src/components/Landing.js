import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';


class Landing extends Component {
  constructor() {
    super();
    this.state = { fixed: false };
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.height = window.innerHeight;
  }
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    const { children } = this.props;
    const { fixed } = this.state;

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
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item as='a' active>
                Home
                    </Menu.Item>
              <Menu.Item as='a' href='#menu'>Menu</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed} primary={fixed} icon='search' />
                <Button as='a' inverted={!fixed} content='Cart' icon='cart' labelPosition='left' style={{ marginLeft: '0.5em' }} />

              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    );
  }
}

export default Landing;