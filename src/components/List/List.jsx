import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails"


const List = ({places}) => {
  const [rating, setRating] = useState('')

  return (
    <div style={{ padding: '25px' }}>
      <Typography variant="h4">
        Restaurants around you
      </Typography>
      <FormControl variant="standard" sx={{ minWidth: 120, marginBottom: '30px' }}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Aboove 4.0</MenuItem>
          <MenuItem value={4.5}>Aboove 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid item xs={12} sx={{ height: '75vh', overflow: 'scroll', alignItems:"center" }}>
        {places?.map((place, i) => (
          <Grid item key={i} >
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
};
export default List;
