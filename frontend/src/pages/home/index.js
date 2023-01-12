import React, { useState, useEffect } from 'react';
import { getAllcomments } from '../../utils/api';
import TradingViewWidgetSingle from '../../components/tradingView/tradingView';
import TradingViewChart from '../../components/tradingViewChart/tradingViewChart';
import TradingTicker from '../../components/tradingTicker/tradingTicker';

export default function Home() {
    const [commentsList, setComments] = useState([]);
    useEffect(() => {
        getAllcomments()
            .then(data => setComments(data))
            .catch(err => alert("couldn't load any comments"))
    }, []);
    return (
      <div>
      <div className="comments">
          {commentsList.map((comment, i) => {
              return(
                  <div key={i}>
                      <h1> {comment.crypto} </h1>
                      <h3>{comment.user.username} </h3> 
                      <p>{comment.comment}</p>
                      <TradingViewWidgetSingle />
                      <TradingViewChart />
                      <TradingTicker />
                  </div>
                 
              );
          })}
      </div>
  </div>
)
}
