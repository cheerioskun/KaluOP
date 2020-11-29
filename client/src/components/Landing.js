import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
  Popup,
  Item,
} from "semantic-ui-react";
import CartPopup from "./CartPopup";
import Typewriter from "typewriter-effect";

class Landing extends Component {
  constructor() {
    super();
    this.state = { navFixed: false, height: window.innerHeight };
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);

  }
  hideFixedMenu = () => this.setState({ navFixed: false });
  showFixedMenu = () => this.setState({ navFixed: true });

  render() {

    return (
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: this.state.height, padding: "1em 0em" }}
        vertical
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            navFixed={this.state.navFixed ? "top" : null}
            inverted={!this.state.navFixed}
            pointing={!this.state.navFixed}
            secondary={!this.state.navFixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a" href="#menu">
                Menu
              </Menu.Item>
              <Menu.Item as="a" href="#contact">
                Contact
              </Menu.Item>
              <Menu.Item position="right">
                <Button
                  as="a"
                  inverted={!this.state.navFixed}
                  primary={this.state.navFixed}
                  icon="search"
                />
                <Popup
                  wide
                  position="bottom center"
                  trigger={
                    <Button
                      as="a"
                      inverted={!this.state.navFixed}
                      content="Cart"
                      icon="cart"
                      labelPosition="left"
                      style={{ marginLeft: "0.5em" }}
                    />
                  }
                  on="click"
                >
                  <CartPopup cart={this.props.cart} />
                </Popup>
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
        <h1>Hey Do You Want To Order Food From Your Fav Place..</h1>
        <h4>
          We A Team Of
            <Typewriter
            options={{
              strings: ["Yash Goenka", "Aakash Barthwal", "Rachit Nehra", "Hemant Pandey"],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <h1>Are Here To Help You Out</h1>
      </Segment>

    );
  }
}

export default Landing;
