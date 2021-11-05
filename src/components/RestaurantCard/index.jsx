import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Skeleton from "../Skeleton";
import izakaya from "../../assets/izakaya.jpeg";

import {
    Restaurant,
    RestaurantInfo,
    Title,
    Address,
    RestaurantPhoto,
} from "./style";

const RestaurantCard = ({ restaurant, onClick }) => {
  const [loadedImage, setLoadedImage] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        loadedImage={loadedImage}
        alt="Restaurant Photo"
        src={restaurant.photos ? restaurant.photos[0].getUrl() : izakaya}
        onLoad={() => setLoadedImage(true)}
      />
      {!loadedImage && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  )
};

export default RestaurantCard;