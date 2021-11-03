import React from 'react';
import styled from "styled-components"

const Card = styled.div`
    width: 90px;
    height: 90px;border-radius 3px;
    background-image: ${(props) => props.photo};
    background-size: cover;
`;

const ImageCard = ({ photo }) => <Card photo={photo} />;

export default ImageCard;