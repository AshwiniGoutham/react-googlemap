import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%',
  };
class MapComp extends React.Component{
    render(){
        return(
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.props.lat, lng: this.props.long}}
             >
              <Marker position={{ lat: this.props.lat, lng: this.props.long}} />
            </Map>
          
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBs40NCgfULDURH-1IntiSPYVZ5OzQRI6M'
  })(MapComp);