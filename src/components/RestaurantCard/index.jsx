import React from 'react';

import {
    Restaurant,
    RestaurantInfo,
    Title,
    Address
} from "./style";

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome</Title>
      <p>Avaliacao</p>
      <Address>Rua Corupá</Address>
    </RestaurantInfo>
  </Restaurant>
  );

export default RestaurantCard;