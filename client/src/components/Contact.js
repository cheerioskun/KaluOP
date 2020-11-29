import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Segment,
  Image,
  Icon,
  Grid,
  Visibility,
  List,
} from "semantic-ui-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
class Contact extends Component {
  constructor() {
    super();
    this.state = { passed: false };
    this.handleAppearance = this.handleAppearance.bind(this);
  }
  handleAppearance() {
    this.setState({ passed: !this.state.passed });
  }
  render() {
    return (
      <Segment inverted>
        <Container fluid styles={{ padding: "3em" }} id="contact">
          <Visibility onTopPassed={this.handleAppearance}>
            <Container textAlign="center">
              <Header style={{ padding: '0.2em', fontSize: '8em', fontFamily: 'Amigo', color: '#aaaaaa', '-webkit-text-stroke': "2px black" }}>CONTACT US</Header>
            </Container>
          </Visibility>
          <Grid style={{ minHeight: "600px" }} columnCount={2}>
            <Grid.Row>
              <Grid.Column width={8}>
                <Map
                  google={this.props.google}
                  zoom={14}
                  initialCenter={{ lat: 29.9476, lng: 76.8155 }}
                >
                  <Marker position={{ lat: 29.9476, lng: 76.8155 }} />
                </Map>
              </Grid.Column>
              <Grid.Column width={8} style={{ padding: "3em" }}>
                <List verticalAlign='middle'>
                  <List.Item divided>
                    <Header as="h2" icon textAlign="center" style={{ color: "#aaaaaa" }}>
                      <Icon name="user" circular />
                      <Header.Content>Kalu Paranthas</Header.Content>
                    </Header>
                  </List.Item>
                  <br />
                  <br />
                  <List.Item>
                    <Container textAlign='center'>
                      <div class="ui relaxed horizontal list">
                        <div class="item"><Icon name='phone' size='large' /></div>
                        <div class="item"><Header size='large' style={{ color: "#888888" }}>+91 - 99960 39937</Header></div>
                      </div>
                    </Container>
                  </List.Item>
                  <List.Item>
                    <Container textAlign='center'>
                      <div class="ui relaxed horizontal list">
                        <div class="item"><Icon name='mail' size='large' /></div>
                        <div class="item"><Header size='large' verticalAlign='middle' style={{ color: "#888888" }}>kaluparanthas@gmail.com</Header></div>
                      </div>
                    </Container>
                  </List.Item>
                  <List.Item>
                    <Container textAlign='center'>
                      <div class="ui relaxed horizontal list">
                        <div class="item"><Icon name='marker' size='large' /></div>
                        <div class="item"><Header size='large' style={{ color: "#888888" }}>Kirmich Road Kurukshetra, 136119</Header></div>
                      </div>
                    </Container>
                  </List.Item>
                </List>
                <br />
                <br />
                <Container textAlign='center'>
                  <h2>Connect With Us On </h2>
                  <br></br>
                  <div class="ui relaxed horizontal list">
                    <div class="item">
                      <Icon name="twitter" circular size='large' />
                    </div>
                    <div class="item">
                      <Icon name="reddit" circular size='large' />
                    </div>
                    <div class="item">
                      <Icon name="youtube" circular size='large' />
                    </div>
                  </div>

                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBF0gSFSHbV0McDIOCBlmGA35EKT9a-Uws",
})(Contact);
