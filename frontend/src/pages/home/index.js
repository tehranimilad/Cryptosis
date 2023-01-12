import React, { useState, useEffect } from 'react';
import { getAllcomments } from '../../utils/api';
import TradingViewWidgetSingle from '../../components/tradingView/tradingView';
import TradingViewChart from '../../components/tradingViewChart/tradingViewChart';
import TradingViewWidgetSingle2 from '../../components/tradingView/tradingView';
import TradingTicker from '../../components/tradingTicker/tradingTicker';
import './home.css'

export default function Home() {
    const [commentsList, setComments] = useState([]);
    useEffect(() => {
        getAllcomments()
            .then(data => setComments(data))
            .catch(err => alert("couldn't load any comments"))
    }, []);
    return (
      <div>
      <h1>Cryptosis</h1>
      <TradingViewChart />
      <TradingViewWidgetSingle />

      {/* <TradingTicker />  */}
      <div className="comments">
        <h2>Comments:</h2>
          {commentsList.map((comment, i) => {
              return(
                  <div key={i}>
                      <p>Username: {comment.user && comment.user.username} </p> 
                      <p> Crypto: {comment.crypto} </p>
                      <p>Comment: {comment.comment}</p>
                  </div>
                 
              );
          })}
      </div>
  </div>
)
}
