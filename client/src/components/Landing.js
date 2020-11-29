import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
  Popup,
  Item,
  Header,
  Grid
} from "semantic-ui-react";
import CartPopup from "./CartPopup";
import Typewriter from "typewriter-effect";
import bgfoods from '../assets/bgfoods.jpg';
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
        textAlign="center"
        style={{ minHeight: this.state.height, padding: "1em 0em", backgroundImage: `url(${bgfoods})` }}
        vertical
        id="home"
      >
        <Visibility
          once={false}
          onTopPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            fixed={this.state.navFixed ? "top" : null}
            inverted
            secondary={!this.state.navFixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" href="#home">Home</Menu.Item>
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
                  disabled={this.props.cart.length === 0}
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
        <Segment vertical>
          <Container textAlign='center'>
            <Header style={{ fontFamily: 'Amigo', fontSize: '10em', color: '#e15959', '-webkit-text-stroke': "2px black", marginTop: '1em' }}>Kalu Paranthas</Header>
          </Container>
        </Segment>
        <Segment vertical style={{ fontFamily: 'Mexican Tequila', fontSize: '4em', color: '#52a083', '-webkit-text-stroke': "2px black" }}>
          <Grid verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8} textAlign='right'>
                <Typewriter
                  options={{
                    strings: ["Paneer Paranthas", "Laccha Paranthas", "Plain Paranthas", "Aloo Paranthas"],
                    autoStart: true,
                    loop: true
                  }} />
              </Grid.Column>
              <Grid.Column width={8} textAlign='left'>
                <p style={{ fontFamily: 'Mexican Tequila', fontSize: '1em', color: '#52a083', '-webkit-text-stroke': "2px black" }}>and more treats !</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>


        </Segment>
        {/* {<h1>Hey Do You Want To Order Food From Your Fav Place..</h1>
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
        <h1>Are Here To Help You Out</h1>} */}
      </Segment>

    );
  }
}

export default Landing;
