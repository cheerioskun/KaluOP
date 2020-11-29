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
      <Container fluid styles={{ padding: "3em" }} id="contact">
        <Visibility onTopPassed={this.handleAppearance}>
          <Container textAlign="center">
            <Header style={{ padding: "1em", fontSize: "3em" }}>Contact</Header>
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
              <div>
                <Header as="h2" icon textAlign="center">
                  <Icon name="user" circular />
                  <Header.Content>For Any Enquiry..</Header.Content>
                </Header>
                <div class="ui middle aligned animated list">
                  <div class="item">
                    <Container textAlign="center">
                      <div class="content">
                        <div class="header">
                          <h3>
                            <span>
                              <Icon name="mobile alternate icon" circular />
                            </span>
                            8881110655
                          </h3>
                        </div>
                      </div>
                    </Container>
                  </div>
                  <div class="item">
                    <Container textAlign="center">
                      <div class="content">
                        <div class="header">
                          <h3>
                            <span>
                              <Icon name="location arrow" circular />
                            </span>
                            Outside Nit
                          </h3>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>

                <Container textAlign='center'>
                  <h3>Connect With us on </h3>
                  <br></br>
                  <div class="ui relaxed horizontal list">
                  <div class="item">
                    <Icon name="twitter" circular />
                  </div>
                  <div class="item">
                    <Icon name="reddit" circular />
                  </div>
                  <div class="item">
                    <Icon name="youtube" circular />
                  </div>
                </div>

                </Container>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBF0gSFSHbV0McDIOCBlmGA35EKT9a-Uws",
})(Contact);
