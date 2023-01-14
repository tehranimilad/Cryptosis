import React, { useEffect } from 'react';

const CryptoMarketTicker = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank">
                        <span class="blue-text">Crypto markets</span>
                    </a> by TradingView
                </div>
                <script type="text/javascript">
                    {`
                        {
                            "width": "100%",
                            "height": "100%",
                            "defaultColumn": "overview",
                            "screener_type": "crypto_mkt",
                            "displayCurrency": "USD",
                            "colorTheme": "light",
                            "locale": "en"
                        }
                    `}
                </script>
            </div>
        </div>
    )
}
export default CryptoMarketTicker 
