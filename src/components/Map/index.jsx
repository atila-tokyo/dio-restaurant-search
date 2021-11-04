/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { setRestaurants, setRestaurant } from "../../redux/modules/restaurants";

export const MapContainer = (props) => {
    const [map, setMap] = useState(null);
    const { google, query } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    const searchByQuery = (query) => {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: map.center,
            radius: "200",
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log("restaurants: ", results);
                dispatch(setRestaurant(results))
            }
        });
    }
    const searchNearBy = (map, center) => {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: center,
            radius: "20000",
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log("restaurants: ", results);
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
        >
        <Marker />
      </Map>
)
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'en',
})(MapContainer);
