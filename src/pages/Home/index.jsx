import React, { useState } from "react";
import TextField, { Input } from "@material/react-text-field";

import MaterialIcon from "@material/react-material-icon";
import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from "./style";
import logo from "../../assets/logo.svg";


const Home = () => {
    const [inputValue, setInputValue] = useState();
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
              <Input value={inputValue} onChange={(e) => setInputValue(e.target.value )} />
            </TextField>
            <CarouselTitle> Near your location</CarouselTitle>
          </Search>
        </Container>
        <Map />
      </Wrapper>
    );
}
export default Home;
