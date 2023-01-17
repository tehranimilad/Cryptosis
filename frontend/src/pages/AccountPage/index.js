import { deleteUserAccount } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import './accountPage.css'


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
        if (window.confirm("Are you sure you want to delete your account? This action can't be undone!")) {
            deleteUserAccount(userData._id);
            localStorage.clear();
            props.setIsLoggedIn(false);
            navigate('/');
        }
    }

    return(
        <>
        <div className="account-page">
            <div>
                <div className="account-info" >
                    <div className="coloumn sm-6 account-greeting">
                        <h2>Hello {userData.username ? userData.username : 'User'}, Thank You for using Cryptosis!</h2>
                        <h4>Your Username: {userData.username}</h4>
                        <p> Want to share your cryptocurrency thoughts on the discussion board? If so, click on the button below!</p>
                        <Button href="/newcomment" id="create-comment">Create a Comment</Button>
                        <br />
                        <br />
                        <Button href="/" variant="secondary" id="go-home">View Discussion Board</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="active-listings">
            <h2>Your Active Comments:</h2>
            <div className="row">
                {userCommentData.map((comment, i) => {
                return(
                    <div key={i} className="card" style={{width: '18rem'}}>
                        <div>
                            <h5 >{comment.title}</h5>
                            <p >{comment.description}</p>
                            <div>
                                <Link to={"/commentedit/" + comment._id}>Edit</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="deleteAccountDiv">
            <p>Permantly delete your account, active listings, and all data associated with it.</p>
                        <p id="warning"> Warning: this action can't be undone!</p> 
                        <Button id="delete-account" onClick={handleDelete}>Delete Account</Button>
            </div>
        </div>
        </>
    )
}


export default AccountPage 