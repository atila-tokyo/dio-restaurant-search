import React from "react";
import TextField, { Input } from "@material/react-text-field";

import { Container, Search } from "./style";
import logo from "../../assets/logo.svg";

const Home = () => (
  <Container>
    <Search>
            <img src={logo} alt="Website logo" />
            <TextField
                label="Search"

            ></TextField>
    </Search>
  </Container>
);

export default Home;
