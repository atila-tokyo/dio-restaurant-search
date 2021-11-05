import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent
} from "./style";
import {
  Card,
  RestaurantCard,
  Modal,
  Map,
  Lottie,
  Skeleton
} from "../../components";
import logo from "../../assets/logo.svg";
import izakaya from "../../assets/izakaya.jpeg"


const Home = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptativeHeight: true,
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  };

  const handleModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpened(true);
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
            <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle> Near your location</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : izakaya}
                    title={restaurant.name}
                />
              ))} 
              </Carousel>
            </>
          ) : (
            <Lottie /> 
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleModal(restaurant.place_id)}
            restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.opening_hours?.isOpen()
              ? "We're open now"
              : "Closed now"}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
          
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
