import React, { useState, useEffect } from 'react';
import { createComments, getAllComments } from '../../utils/api';
import TradingViewWidget from '../../components/tradingView/tradingView';
import TradingViewChart from '../../components/tradingViewChart/tradingViewChart';
import { useNavigate } from "react-router-dom"
import TradingTicker from '../../components/tradingTicker/tradingTicker';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CryptoMarketTicker from '../../components/cryptoMarketTicker';
import './home.css'





export default function Home(props) {
    const [commentsList, setComments] = useState([]);
    useEffect(() => {
        getAllComments()
            .then(data => setComments(data))
            .catch(err => alert("couldn't load any comments"))
    }, []);
    return (
      <div>
      <h1>Cryptosis</h1>
    
      <div className="tradingview-widget-container">
            <div className="item"><TradingViewWidget /></div>
          </div>


      <div className="comments">
      <h2 className="mainFormHeader">Which Cryptocurrency do you think has the most potential?</h2>
        <img className="homeGiphy" src="https://media0.giphy.com/media/QnU6mOrBbElaIQz4Fe/giphy.gif"></img>
        {props.isLoggedIn ? 
        <a className="addCommentLink" href="/newcomment">Click here to voice your opinion!</a>
        : null}
        
          {commentsList.map((comment, i) => {
              return(
                  <div className="commentSection" key={i}>
                      <p className="commentContent">Title: {comment.title} </p>
                      <p className="commentContent">Username: {comment.user && comment.user.username} </p> 
                      <p className="commentContent">Time/Date Posted: {comment.created}</p>
                      <p className="commentContent">Crypto: {comment.crypto} </p>
                      <p className="commentContent">Comment: {comment.comment}</p>
                  </div>   
              );
          })}
      </div>
  </div>
)
}

