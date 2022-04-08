import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material"
import Header from "./components/Header/Header";
import Map from "./components/Map/Map"
import List from "./components/List/List";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState('')
  const [autocomplete, setAutocomplete] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw) {
      setIsLoading(true)
      getPlacesData({ bounds })
        .then((data) => {
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
          setFilteredPlaces([])
          setIsLoading(false)
        })
    }
  }, [bounds])

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }

  return (
    <>
      <CssBaseline />
      <Header
        setCoordinates={setCoordinates}
        autocomplete={autocomplete}
        setAutocomplete={setAutocomplete}
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
};
export default App;
