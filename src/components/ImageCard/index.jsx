import React from 'react';
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 90px;
    height: 90px;border-radius 3px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    margin-top: 5px;
    padding: 10px;
`;

const Title = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    front-size: 10px;
`;

const ImageCard = ({ photo, title }) => {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  )

}

  

export default ImageCard;