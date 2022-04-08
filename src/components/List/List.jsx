import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails"


const List = ({ places, childClicked, isLoading, rating, setRating }) => {
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div style={{ padding: '25px' }}>
      <Typography variant="h4">Restaurants around you</Typography>
      {isLoading ? (
        <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <FormControl variant="standard" sx={{ minWidth: 120, marginBottom: '30px' }}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Aboove 4.0</MenuItem>
              <MenuItem value={4.5}>Aboove 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} sx={{ height: '75vh', overflow: 'auto' }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}
export default List;
