import React from "react";
import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

const Header = ({ onLoad, onPlaceChanged }) => {

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }} >
        <Typography variant="h5" sx={{ display: "block" }} >
          Cooperative Map App
        </Typography>
        <Box display="flex" justifyContent='space-between' >
          <Typography variant="h6" sx={{ mr: "20px" }}>
            Find Restaurants
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <InputBase sx={{ color: "white" }} placeholder="Search..." />
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
};
export default Header;
