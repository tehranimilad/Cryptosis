import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewChart() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_1a6a2') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "BITSTAMP:ETHUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "0",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            hotlist: true,
            container_id: "tradingview_1a6a2"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_1a6a2' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/symbols/ETHUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span className="blue-text">Ethereum chart</span></a> by TradingView
      </div>
    </div>
  );
}