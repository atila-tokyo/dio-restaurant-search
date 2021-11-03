import React, { useState } from "react";
import TextField, { Input } from "@material/react-text-field";

import MaterialIcon from "@material/react-material-icon";
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from "./style";
import { Card, RestaurantCard, Modal } from "../../components";
import logo from "../../assets/logo.svg";
import izakaya from "../../assets/izakaya.jpeg"


const Home = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Website logo" />
          <TextField
            label="Search for your next dine"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle> Near your location</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={izakaya} title="nome restaurante" />
            <Card photo={izakaya} title="nome restaurante" />
            <Card photo={izakaya} title="nome restaurante" />
            <Card photo={izakaya} title="nome restaurante" />
            <Card photo={izakaya} title="nome restaurante" />
          </Carousel>
          <button type="button" onClick={() => setModalOpened(true)}>Open</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
