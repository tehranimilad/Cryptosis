import React, { useEffect } from 'react';

const TradingTicker = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    script.async = true;
    script.onload = () => {
      window.TradingView.widget({
        "container_id": "tradingview_widget",
        "symbols": [
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            },
            {
              "description": "Litecoin",
              "proName": "BITSTAMP:LTCUSD"
            },
            {
              "description": "Polygon",
              "proName": "BITSTAMP:MATICUSD"
            },
            {
              "description": "XRP",
              "proName": "BITSTAMP:XRPUSD"
            }
          ],
        "colorTheme": "light",
        "isTransparent": false,
        "showSymbolLogo": true,
        "locale": "en"
      });
    };
    document.body.appendChild(script);
  }, []);
  
  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_widget"></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}

export default TradingTicker;