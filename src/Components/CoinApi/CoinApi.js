import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinData from "../CoinData/CoinData";

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
        <div>
            <div className='search-coin'>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Coin Ara...'
                    />
                </form>
            </div>
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
        </div>
    );
}

export default CoinApi;