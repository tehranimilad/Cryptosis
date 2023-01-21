import React, { useState, useEffect } from 'react';
import { createComments, getAllComments } from '../../utils/api';
import Button from 'react-bootstrap/Button';
import './home.css'
import CryptohopperWidget from '../../components/cryptoNews/cryptoNews';

const HomePage = (props) => {
    const [commentsList, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    useEffect(() => {
        getAllComments()
            .then(data => setComments(data))
            .catch(err => alert("couldn't load any comments"))
    }, []);
    return (
      <>
      <div className="forum-image" />
      <div className="comments">
      <h2 className="mainFormHeader">Which Cryptocurrency do you think has the most potential?</h2>
        {props.isLoggedIn ? 
        // Button to add comment wont show unless user is logged in
        <Button variant="primary" href="/newcomment">Click here to voice your opinion!</Button>
        : null}
        <Button variant="dark" onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>

          {showComments ? 
          commentsList.map((comment, i) => {
              return(
                  <div className="commentSection" key={i}>
                      <p className="commentContent">Title: {comment.title} </p>
                      <p className="commentContent">Username: {comment.user && comment.user.username} </p> 
                      <p className="commentContent">Time/Date Posted: {comment.created}</p>
                      <p className="commentContent">Crypto: {comment.crypto} </p>
                      <p className="commentContent">Comment: {comment.comment}</p>
                  </div>   
              );
          }) : null
          }
      </div>
      <CryptohopperWidget />
  </>
)
}

export default HomePage
