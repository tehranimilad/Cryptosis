import React, { useEffect } from 'react';

const TradingViewWidgetSingle = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: "ETHUSDT",
            width: 350,
            height: 220,
            locale: "en",
            dateRange: "12M",
            colorTheme: "light",
            trendLineColor: "rgba(41, 98, 255, 1)",
            underLineColor: "rgba(41, 98, 255, 0.3)",
            underLineBottomColor: "rgba(41, 98, 255, 0)",
            isTransparent: false,
            autosize: false,
            largeChartUrl: ""
        });
        document.querySelector("#tradingview-widget-container").appendChild(script);
    }, []);
    

    return (
        <div className="tradingview-widget-container" id="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/ETHUSDT/?exchange=FX" rel="noopener" target="_blank">
                    <span className="blue-text">ETH USD rates</span>
                </a> by TradingView
            </div>
        </div>
    );
}

export default TradingViewWidgetSingle
