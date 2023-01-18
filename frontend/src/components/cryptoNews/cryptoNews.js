import React, { useEffect } from 'react';
import './cryptoNews.css'

const CryptohopperWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.cryptohopper.com/widgets/js/script';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="cryptohopper-web-widget" data-id="5" data-news_count="3"></div>
  );
}

export default CryptohopperWidget;