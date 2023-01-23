import React, { useEffect } from 'react';

// Refrenced https://www.coinlore.com/crypto-widgets for API widget
const CoinGecko = ({ mcap, mcurrency, top, cwidth, bcolor, coincolor, pricecolor }) => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.coinlore.com/widgets/coinlore-list-widget.js";
    // script will be executed asynchronously, allowing the page to continue loading while the script is being fetched.
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div
      className="coinlore-list-widget"
      data-mcap={mcap}
      data-mcurrency={mcurrency}
      data-top={top}
      data-cwidth={cwidth}
      data-bcolor={bcolor}
      data-coincolor={coincolor}
      data-pricecolor={pricecolor}
      style={{ minHeight: "400px, width: 100%" }}
      ></div>
    </div>
  );
}

export default CoinGecko;