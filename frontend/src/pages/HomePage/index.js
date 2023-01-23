import React, { useState, useEffect } from 'react';
import { getAllComments } from '../../utils/api';
import Button from 'react-bootstrap/Button';
import './HomePage.css'
import CryptoNews from '../../components/cryptoNews/cryptoNews';
import { Stack } from 'react-bootstrap';


const HomePage = (props) => {
    const [commentsList, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    useEffect(() => {
        getAllComments()
            .then(data => setComments(data))
  }, []);
    return (
      <>
    <div>
      <div className="forum-image" />
      <div className="comments">
      <h2 className="mainFormHeader">Want to talk Crypto? Post Below!</h2>
        {/* if the user isn't logged in, they will see the message */}
        {!props.isLoggedIn ? 
        <p>Create an account or log in to post.</p>
        : null}
        {props.isLoggedIn ? 
        // Button to add comment wont show unless user is logged in
        <Button variant="primary" href="/newcomment">Click here to voice your opinion!</Button>
        : null}
 {/* If showComments is true, the text "Hide Comments" will be displayed on the button, otherwise, if showComments is false, the text "Show Comments" will be displayed. */}
        <Button variant="dark" onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>
        <div className="commentBackground">
          {showComments ? 
          commentsList.map((comment, i) => {
              return(
                  <Stack gap={2} className="commentSection" key={i}>
                      <div className="bg-light border">
                        <p className="commentBold">Title: </p> <p className="commentContent">{comment.title}</p>
                        <p className="commentBold">Username: </p> <p className="commentContent">{comment.user && comment.user.username}</p>
                        <p className="commentBold">Time/Date Posted: </p> <p className="commentContent">{comment.created}</p>
                        <p className="commentBold">Crypto: </p> <p className="commentContent">{comment.crypto} </p>
                        <p className="commentBold">Comment: </p> <p className="commentContent">{comment.comment}</p>
                      </div>
                  </Stack> 
              );
          }) : null
          }
          </div>
        </div>
      <CryptoNews />

    </div>
  </>
)
}

export default HomePage
