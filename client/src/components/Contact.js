import React, { Component } from "react";
import { Container, Header, Item, Segment } from "semantic-ui-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
class Contact extends Component {
  render() {
    return (
      <Segment id='contact'
      style={{minHeight:'600'}}
      >
        <Container textAlign="center">
          <Header style={{ padding: "1em", fontSize: "3em" }}>Contact</Header>
        </Container>
        
        <div class="ui equal width center aligned grid">
          <div class="row">
            <div class="black column">
              <Map google={this.props.google} zoom={14}
              initialCenter={{ lat: 29.9476, lng: 76.8155}}

              >
                <Marker
                position={{ lat: 29.9476, lng: 76.8155}} 
                />

                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow> */}
              </Map>
            </div>
            <div class="olive column">
              <div className="ui middle aligned animated list">
                <div class="item">
                  <div class="content">
                    <div class="header">
                       <h1>Phone No</h1>
                    </div>
                  </div>
                </div>
                
                
               
               
               
              </div>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBF0gSFSHbV0McDIOCBlmGA35EKT9a-Uws')
  })(Contact)
