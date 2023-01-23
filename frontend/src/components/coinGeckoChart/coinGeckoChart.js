import React, { useEffect } from 'react';

const CoinGecko = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/coingecko-coin-list-widget.js";
    // script will be executed asynchronously, allowing the page to continue loading while the script is being fetched.
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <coingecko-coin-list-widget coin-ids="bitcoin,eos,ethereum,litecoin,ripple,matic-network,binance-usd,tether,binancecoin,usd-coin,unagii-usd-coin,cardano" currency="usd" locale="en"></coingecko-coin-list-widget>
    </div>
  );
}

export default CoinGecko;