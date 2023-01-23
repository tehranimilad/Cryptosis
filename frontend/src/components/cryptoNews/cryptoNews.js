import React, { useEffect } from 'react';
import './cryptoNews.css'

const CryptohopperWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.cryptohopper.com/widgets/js/script';
    // script will be executed asynchronously, allowing the page to continue loading while the script is being fetched.
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
   

    <div> 
      <div className="cryptohopper-web-widget" data-id="5" data-news_count="3"></div>
    </div>
  );
}

export default CryptohopperWidget;