import React, { useEffect } from 'react';


// Refrenced https://www.coingecko.com/en/widgets/coin_heatmap_widget for widget
const CoinGeckoHeatmap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js";
    // script will be executed asynchronously, allows to continue loading while the script is being fetched.
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <coingecko-coin-heatmap-widget height={450} locale="en"></coingecko-coin-heatmap-widget>
    </div>
  );
}

export default CoinGeckoHeatmap;