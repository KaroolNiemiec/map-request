import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Rating } from "@mui/material";
import { height } from "@mui/system";
import { PlaceTwoTone, PriceChange } from "@mui/icons-material";

const PlaceDetails = ({ place }) => {
  return (
    <Card elevation={6} >
      <CardMedia
        sx={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom varaint="h5" >{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottomvariant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center" >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} sx={{ margin: '5px 5px 5px 0' }} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="subtitile2" color="textSecpndary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }} >
            <LocationOnOutlinedIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="subtitile2" color="textSecpndary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
            <PhoneAndroidIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')} >
            WEBSITE
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
};
export default PlaceDetails;
