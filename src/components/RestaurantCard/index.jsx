import React from 'react';
import ReactStars from "react-rating-stars-component";
import izakaya from "../../assets/izakaya.jpeg"

import {
    Restaurant,
    RestaurantInfo,
    Title,
    Address,
    RestaurantPhoto
} from "./style";

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome</Title>
      <ReactStars count={5} isHalf value={4} edit={false} />
      <Address>Rua Corupá</Address>
    </RestaurantInfo>
    <RestaurantPhoto alt="" src={izakaya} />
  </Restaurant>
  );

export default RestaurantCard;