import React from "react";
// import { Autocomplete } from "@react-google-maps/api"
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar sx={{
        display: "flex",
        justifyContent: 'space-between'
      }} >
        <Typography variant="h5" sx={{
          display: "block",
        }} >
          Cooperative Map App
        </Typography>
        <Box display="flex" >
          <Typography variant="h6" >
            Find Restaurants
          </Typography>
          {/* <Autocomplete> */}
          <SearchIcon />
          <InputBase placeholder="Search..." />
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
};
export default Header;
