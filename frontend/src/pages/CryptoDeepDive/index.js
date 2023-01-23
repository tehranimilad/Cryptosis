import React from 'react';
import CoinGecko from '../../components/coinGeckoChart/coinGeckoChart';
import CoinGeckoHeatmap from '../../components/coinGeckHeatmap/coinGeckoHeatmap';

const CryptoDeepDive = () => {
    return (
        <div>
            <CoinGeckoHeatmap height={450} locale="en" />
            <CoinGecko mcap="0" mcurrency="usd" top="100" cwidth="100%" bcolor="#fff" coincolor="#428bca" pricecolor="#4c4c4c" />
          
        </div>
    )
}

export default CryptoDeepDive

