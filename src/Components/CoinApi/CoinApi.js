import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinData from "../CoinData/CoinData";
import styled from "styled-components";

function CoinApi() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ApiContainer>
            <CoinApp>
                <SearchBar>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Coin Ara...'
                    />
                </SearchBar>
            </CoinApp>
    {filteredCoins.map(coin => {
        return (
            <CoinData
            key = {coin.id}
            name = {coin.name}
            price = {coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            symbol = {coin.symbol}
            image = {coin.image}
            src = {coin.src}
            />
        );
    })}
        </ApiContainer>
    );
}
const ApiContainer = styled.div `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
   `
const CoinApp = styled.div `
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  
   `
const SearchBar = styled.div `
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  input {
    background: antiquewhite;
    font-size: 0.8em;
    padding: 0.25em 1em;
    border: 3px solid dimgrey;
    
  }
  
   `

export default CoinApi;