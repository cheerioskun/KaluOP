import React, { Component } from "react";
import { Container, Header, Item, Segment, Image, Icon, Grid, Visibility } from "semantic-ui-react";
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
      <Container fluid styles={{ padding: '3em' }} id="contact">
        <Visibility onTopPassed={this.handleAppearance}>
          <Container textAlign='center'>
            <Header style={{ padding: '1em', fontSize: '3em' }}>Contact</Header>
          </Container>
        </Visibility>
        <Grid style={{ minHeight: '600px' }} columnCount={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Map google={this.props.google} zoom={14}
                initialCenter={{ lat: 29.9476, lng: 76.8155 }}

              >
                <Marker
                  position={{ lat: 29.9476, lng: 76.8155 }}
                />
              </Map>
            </Grid.Column>
            <Grid.Column width={8} style={{ padding: '3em' }}>
              <div>
                <Header as='h2' icon textAlign='center'>
                  <Icon name='users' circular />
                  <Header.Content>Friends</Header.Content>
                </Header>
                <Image
                  centered
                  size='large'
                  src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBF0gSFSHbV0McDIOCBlmGA35EKT9a-Uws')
})(Contact)
