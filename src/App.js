import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";

import { getPlacesData, getWeatherData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Footer from "./components/footer/Footer";

// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  const [places, setPlaces] = useState([]);
  // const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // console.log("coords:", latitude, longitude);
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      // getWeatherData(coords.lat, coords.lng).then((data) =>
      //   setWeatherData(data)
      // );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        // console.log("DATA:", data);
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  // console.log("places:", places);

  return (
    <>
      <CssBaseline />
      <Header setCoords={setCoords} />
      <Grid container spacing={3} style={{ width: "100%", margin: "auto" }}>
        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            // weatherData={weatherData}
          />
        </Grid>
        {places.length > 0 ? (
          <Grid item xs={12} md={4}>
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            md={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1">
              Fetching great PLACES to display around U. Make sure to enable
              geolocation tracking, pick a place from the search box, or Try
              zoom out the map.
            </Typography>
            <img
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1629369677/loading-36_q2eset.gif"
              alt="not found"
              style={{ width: "100%", margin: "auto", padding: "20px" }}
            />
          </Grid>
        )}

        <Footer />
      </Grid>
    </>
  );
};

export default App;
