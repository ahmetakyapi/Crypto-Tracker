import React from 'react'

const CoinData = () => ({name, price, symbol,image, priceChange}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <span className='coin-symbol'>{symbol}</span>
                    <span className="coin-price">{price}</span>
                </div>
                <div className='coin-data'>
                    <p className='coin-symbol'>{symbol}</p>
                    {priceChange < 0 ? (
                        <span className='coin-percent red'>{priceChange.toFixed(2)}%</span>
                    ) : (
                        <span className='coin-percent green'>{priceChange.toFixed(2)}%</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CoinData
