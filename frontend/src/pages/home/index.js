import React, { useState, useEffect } from 'react';
import { createComments, getAllComments } from '../../utils/api';
import TradingViewWidgetSingle from '../../components/tradingView/tradingView';
import TradingViewChart from '../../components/tradingViewChart/tradingViewChart';
import { useNavigate } from "react-router-dom"
import TradingTicker from '../../components/tradingTicker/tradingTicker';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CryptoMarketTicker from '../../components/cryptoMarketTicker';
import './home.css'




export default function Home() {
    const [commentsList, setComments] = useState([]);
    useEffect(() => {
        getAllComments()
            .then(data => setComments(data))
            .catch(err => alert("couldn't load any comments"))
    }, []);
    return (
      <div>
      <h1>Cryptosis</h1>
      {/* <CryptoMarketTicker /> */}
      <TradingViewWidgetSingle />
      

      {/* <TradingTicker />  */}
      <div className="comments">
      <h2 className="mainFormHeader">Which Cryptocurrency do you think has the most potential?</h2>
        <img className="homeGiphy" src="https://media0.giphy.com/media/QnU6mOrBbElaIQz4Fe/giphy.gif"></img>
        
        <a className="addCommentLink" href="/newcomment">Click here to voice your opinion!</a>
          {commentsList.map((comment, i) => {
              return(
                  <div key={i}>
                      <p>Title: {comment.title} </p>
                      <p>Username: {comment.user && comment.user.username} </p> 
                      <p>Time/Date Posted: {comment.created}</p>
                      <p>Crypto: {comment.crypto} </p>
                      <p>Comment: {comment.comment}</p>
                  </div>   
              );
          })}
      </div>
  </div>
)
}
