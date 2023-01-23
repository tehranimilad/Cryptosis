import React, { useEffect } from 'react';
import './cryptoNews.css'

const CryptohopperWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.cryptopanic.com/static/js/widgets.min.js";
    // script will be executed asynchronously, allowing the page to continue loading while the script is being fetched.
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
      <a
        href="https://cryptopanic.com/"
        target="_blank"
        data-news_feed="recent"
        data-font_family="sans"
        data-bg_color="#FFFFFF"
        data-text_color="#333333"
        data-link_color="#010101"
        data-header_bg_color="#30343B"
        data-header_text_color="#FFFFFF"
        data-posts_limit="6"
        className="CryptoPanicWidget">
        Latest Updates In Crypto
      </a>
  );
}

export default CryptohopperWidget;
