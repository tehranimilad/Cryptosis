import React, { useEffect } from 'react';

const CoinGeckoHeatmap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <coingecko-coin-heatmap-widget height="450" locale="en"></coingecko-coin-heatmap-widget>
    </div>
  );
}

export default CoinGeckoHeatmap;