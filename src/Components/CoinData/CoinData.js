import React from 'react'
import styled from "styled-components";


const CoinData = ({
                  name,
                  price,
                  symbol,
                  image,
                  priceChange
              }) => {
    return (
      <CoinContainer>
          <CoinRow>
              <Coin>
                      <img src={image} alt="i"/>
                       <h1>{name}</h1>
              </Coin>
             <CoinDigitalData>
                      <span>{symbol}</span>
                      <h4>${price}</h4>
                      <h4>%{priceChange}</h4>
          </CoinDigitalData>
          </CoinRow>
      </CoinContainer>
    )
}
   const CoinContainer = styled.div `
     display: flex;
     justify-content: center;
     
   `
   const CoinRow= styled.div `
     display: flex;
     flex-direction: row;
     justify-content: start;
     align-items: center;   
     height: 55px;
     border-bottom: 2px solid antiquewhite;
     width: 720px;
   `
  const Coin = styled.div `
    display: flex;
    align-items: center;
    padding-right: 24px;
    min-width: 300px;
    h1 {
      color: gainsboro;
      font-weight: 800;
      font-size: 1rem;
      padding-left: 2rem;
      text-align: center;
    }
    img {
      height: 30px;
      width: 30px;
    }
   `
const CoinDigitalData= styled.div `
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
  h4 {
    color: gainsboro;
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    align-items: center;
  }

  span {
    padding-right: 90px;
    font-weight: 700;
    font-size: 1rem;
    color: cornflowerblue;
    text-transform: uppercase;
    align-items: center;
  }
   `


export default CoinData
