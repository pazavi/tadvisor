import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import NavigationIcon from "@material-ui/icons/Navigation";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import LanguageIcon from "@material-ui/icons/Language";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp, type }) => {
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={2}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Price:</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle2">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Typography variant="subtitle2" style={{ marginTop: "10px" }}>
            Ranking:
          </Typography>

          <Typography
            gutterBottom
            variant="subtitle2"
            style={{ marginBottom: "10px" }}
          >
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} alt={place.name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="secondary"
            style={{ fontSize: "12px" }}
            className={classes.call}
            onClick={() =>
              window.open(
                `https://waze.com/ul?ll=${place.latitude},${place.longitude}&navigate=yes`,
                "_blank"
              )
            }
          >
            <NavigationIcon size="small" /> Navigate
          </Button>

          {type !== "hotels" && (
            <Button
              size="small"
              color="secondary"
              style={{ fontSize: "12px" }}
              href={`tel:${place.phone}`}
              className={classes.call}
            >
              <PhoneAndroidRoundedIcon /> Call
            </Button>
          )}
        </CardActions>

        <CardActions>
          <Button
            size="small"
            color="primary"
            style={{ fontSize: "12px" }}
            onClick={() => window.open(place.web_url, "_blank")}
            className={classes.outLinks}
          >
            <img
              className={classes.tripAdvisorLogo}
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/c_scale,e_negate,w_67/v1629300380/48942_kbiv5v.png"
              alt="TA"
            />{" "}
            Trip Advisor
          </Button>
          {type !== "hotels" && (
            <Button
              size="small"
              color="primary"
              className={classes.outLinks}
              style={{ fontSize: "12px" }}
              onClick={() => window.open(place.website, "_blank")}
            >
              <LanguageIcon /> Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
