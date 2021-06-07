import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import CoinData from "./Components/CoinData/CoinData"
import CoinApi from "./Components/CoinApi/CoinApi";

function App() {
  return (
    <Container>
        <Header/>
       <CoinData/>
        <CoinApi/>
    </Container>
  );

}

const Container = styled.div `
   background: #67bc98;
    height: 150vh;
`
export default App;
