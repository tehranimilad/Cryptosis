import { deleteUserAccount } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";


const AccountPage = (props) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const [userCommentData, setUserCommentData] = useState([])

    useEffect(() => {
        setUserData(props.currentUser.user)
        setUserCommentData(props.currentUser.comments)
    }, [props])

    const handleDelete = () => {
        // Axios function to delete user account by using user.id 
        deleteUserAccount(userData._id)
        // Clearning local storage in order to log out user
        localStorage.clear()
        // Setting user's login status to false, aka logged out
        props.setIsLoggedIn(false)
        // Then navigate back home
        navigate('/')
    }

    return(
        <>
        <div className="account-page">
        <div>
            <div className="coloumn sm-6 account-greeting">
        <div className="account-info">
            <h1>Hello, {userData.username}</h1>
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
            <h2>Your Active Comments:</h2>
            <card>
            <div>
                {userCommentData.map((comment, i) => {
                    return(
                    <div key={i}>
                        <div className="card-body">
                            <h5>{comment.crypto}</h5>
                            <p>{comment.comment}</p>
                            
                            <div>
                            <Link to={"/commentedit/" + comment._id}>Edit</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            </card>
        </div>
        </>
    )
}

export default AccountPage 