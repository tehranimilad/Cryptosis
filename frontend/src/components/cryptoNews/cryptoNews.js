import React, { useEffect } from 'react';
import './cryptoNews.css'

const CryptoNews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.cryptopanic.com/static/js/widgets.min.js";
    // script will be executed asynchronously, allowing the page to continue loading while the script is being fetched.
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
      <div 
        href="https://cryptopanic.com/"
        target="_blank"
        data-news_feed="recent"
        data-font_family="Orbitron"
        data-bg_color="#FFFFFF"
        data-text_color="#333333"
        data-link_color="#010101"
        data-header_bg_color="#000000"
        data-header_text_color="#FFFFFF"
        data-posts_limit="6"
        className="CryptoPanicWidget">
        Latest Updates In Crypto
      </div>
  );
}

export default CryptoNews;
