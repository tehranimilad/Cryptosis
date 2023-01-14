import { deleteUserAccount } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";


const AccountPage = (props) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [userCommentData, setUserCommentData] = useState([]);

    useEffect(() => {
        if(props.currentUser && props.currentUser.user) {
            setUserData(props.currentUser.user);
            setUserCommentData(props.currentUser.comments);
        }
    }, [props.currentUser]);

    const handleDelete = () => {
        deleteUserAccount(userData._id);
        localStorage.clear();
        props.setIsLoggedIn(false);
        navigate('/');
    }

    return(
        <>
        <div className="account-page">
            <div>
                <div className="coloumn sm-6 account-greeting">
                    <div className="account-info">
                        {/* <h1>Hello, {userData.username ? userData.username : 'User'}</h1> */}
                        <p>HODL or die trying</p>
                        <h4>Username: {userData.username}</h4>
                        <p> Want to create a new comment? If so, click on the button below!</p>
                        <Button href="/newcomment" id="create-comment">Create Listing</Button>
                        <p>Permantly delete your account, active listings, and all data associated with it.</p>
                        <p id="warning"> Warning: this action can't be undone!</p> 
                        <Button id="delete-account" onClick={handleDelete}>Delete Account</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="active-listings">
            <h2>Your Active Listings:</h2>
            <div className="row">
                {userCommentData.map((comment, i) => {
                    if (!userData) return null;
                    return(
                    <div key={i} className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={comment.image} alt={comment.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{comment.title}</h5>
                            <p className="card-text">{comment.description}</p>
                            <div>
                                <Link to={"/commentedit/" + comment._id}>Edit</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}


export default AccountPage 