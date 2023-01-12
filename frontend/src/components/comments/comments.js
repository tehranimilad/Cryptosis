import React, { useEffect, useState } from 'react';
import { getAllcomments } from '../../utils/api';
import './comments.css'

export default function Comments() {
  const [commentsList, setComments] = useState([]);

  useEffect(() => {
    getAllcomments()
      .then(data => setComments(data))
      .catch(err => alert("couldn't load any comments"));
  }, []);
  return (
        <div className="comments">
        <h1>User Comments</h1>
            {commentsList.map((comment, i) => {
              return(
                <div key={i}>
                  <h1> {comment.crypto} </h1>
                  <h3>{comment.user.username} </h3> 
                  <p>{comment.comment}</p>
                </div>
               )
            })}
          </div>
        
    )
}