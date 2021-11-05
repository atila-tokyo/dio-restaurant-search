import React, { useState, useEffect }from 'react';
import styled from "styled-components"
import Skeleton from "../Skeleton";


const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius 3px;
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
  const [loadedImage, setLoadedImage] = useState(false);

  useEffect(() => {
    const loader = new Image();
    loader.src = photo;
    loader.onload = () => setLoadedImage(true)
  }, [photo])
  
  return (
    <>
      {loadedImage ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  )

}

  

export default ImageCard;