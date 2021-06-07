import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import CoinApi from "./Components/CoinApi/CoinApi";

function App() {
  return (
    <Container>
        <Header/>
        <CoinApi/>
    </Container>
  );
}
const Container = styled.div `
   background: darkslategray;
    height: 120vh;
`
export default App;
