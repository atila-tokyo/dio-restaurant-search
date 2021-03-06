/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { setRestaurants, setRestaurant } from "../../redux/modules/restaurants";

export const MapContainer = (props) => {
    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;
    const dispatch = useDispatch();

    const { restaurants } = useSelector((state) => state.restaurants);

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    useEffect(() => {
        if (placeId) {
            getRestaurantDetails(placeId)
        }
    }, [placeId]);

    const getRestaurantDetails = (placeId) => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant(null)); /* Cleaning loader cache */
        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
        };

        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(place))
            }
        });
     };

    const searchByQuery = (query) => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([])); /* Cleaning loader cache */
        const request = {
            location: map.center,
            radius: "200",
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results))
            }
        });
    }
    const searchNearBy = (map, center) => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([])); /* Cleaning loader cache */
        const request = {
            location: center,
            radius: "20000",
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results))
            }
        });
    };

    const onMapReady = (_, map) => {
        setMap(map);
        searchNearBy(map, map.center)
    };
    
    return (
      <Map
        google={google}
        centerAroundCurrentLocation
        onReady={onMapReady}
        onReCenter={onMapReady}
        {...props}    
        >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            name={restaurant.name}
            position={{
                    lat: restaurant.geometry.location.lat(),
                    lng: restaurant.geometry.location.lng(),
                }}
            />
        ))}
      </Map>
)
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'en',
})(MapContainer);
