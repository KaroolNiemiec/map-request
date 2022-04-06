import React from "react";
import GoogleMapReact from 'google-map-react'
import { Paper, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from "@mui/material";


const Map = ({setCoordinates, setBounds, coordinates}) => {

    return (
      <div style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBxBzMN2H9jB1nDuAK3ypYQFa_6wvVlFM0' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
        >
        </GoogleMapReact>
      </div>
    )
};
export default Map;
