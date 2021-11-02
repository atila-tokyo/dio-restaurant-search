import React, { useState } from "react";
import TextField, { Input } from "@material/react-text-field";

import { Container, Search } from "./style";
import logo from "../../assets/logo.svg";


const Home = () => {
    const [inputValue, setInputValue] = useState();
    return (
      <>
        <Container>
          <Search>
            <img src={logo} alt="Website logo" />
            <TextField label="Search" outlined>
              <Input value={inputValue} onChange={(e) => setInputValue(e.target.value )} />
            </TextField>
          </Search>
        </Container>
      </>
    );
}
export default Home;
