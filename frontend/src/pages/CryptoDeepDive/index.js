import React from 'react';
import CoinGecko from '../../components/coinGeckoChart/coinGeckoChart';
import CoinGeckoHeatmap from '../../components/coinGeckHeatmap/coinGeckoHeatmap';

const CryptoDeepDive = () => {
    return (
        <div>
            <CoinGeckoHeatmap />
            <CoinGecko />
          
        </div>
    )
}

export default CryptoDeepDive

