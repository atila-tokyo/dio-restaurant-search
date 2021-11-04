import React from 'react';
import ReactStars from "react-rating-stars-component";
import izakaya from "../../assets/izakaya.jpeg"

import {
    Restaurant,
    RestaurantInfo,
    Title,
    Address,
    RestaurantPhoto,
} from "./style";

const RestaurantCard = ({ restaurant, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      alt=""
      src={restaurant.photos ? restaurant.photos[0].getUrl() : izakaya}
    />
  </Restaurant>
  );

export default RestaurantCard;