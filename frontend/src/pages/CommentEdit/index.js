import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deleteOneComments, showOneComments, updateOneComments } from "../../utils/api";
import { useNavigate } from "react-router-dom"
import { Form, Button, Card } from 'react-bootstrap';
import './CommentEdit.css'

const ShowCommentEdit = () => {
    const navigate = useNavigate()

    const [showCommentData, setShowCommentData] = useState({})
    const [editedState, setEditedState] = useState ({
        title: '',
        crypto: '',
        comment: '',
    })

    const {id} = useParams()
    useEffect(() => {
            showOneComments(id).then(data => {
            console.log(data)
            setShowCommentData(data)
            setEditedState(data)
        })
    }, [id])

    const handleChange = (event) => {
        setEditedState({...editedState, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateOneComments(showCommentData._id, editedState).then(data => {
            setShowCommentData(data)
            setEditedState(data)
            navigate('/forum')
        })
    }

    const deleteComment = () => {
        const commentId = showCommentData._id
        if (window.confirm("Are you sure you want to delete this comment?")) {
        deleteOneComments(commentId).then(alert("You deleted this Comment"))
        navigate('/forum')
}
    }
    return(
        <>
        <div className="editImage" />
        <div className="Login-Signup-Div2">  

            <div className="col-md-6 mx-auto" id="EditCommentDiv">
            <Form>
            <Form.Group className="mb-3">
                <h2>Edit Your Comment</h2>
                        <Form.Label className="editCommentLabel">Title</Form.Label>
                        <Form.Control
                            id="title"
                            type="text"
                            value={editedState.title} 
                            onChange={handleChange} 
                            required />
                    </Form.Group> 
            <Form.Group className="mb-3">
                        <Form.Label className="editCommentLabel">Crypto</Form.Label>
                        <Form.Control
                            id="crypto"
                            type="text"
                            value={editedState.crypto} 
                            onChange={handleChange} 
                            required />
                    </Form.Group> 
        
                    <Form.Group className="mb-3">
                        <Form.Label className="editCommentLabel">Comment</Form.Label>
                        <Form.Control
                            id="comment"
                            type="text"
                            value={editedState.comment} 
                            onChange={handleChange} 
                            required />
                    </Form.Group> 
                    <Button id="Editprod-But" variant="primary" type="submit" onClick={handleSubmit}>
                    Submit Edit
                    </Button>
                    <Button variant="danger" id="DeleteComment-But" onClick={deleteComment}>Delete</Button>
            </Form>
            </div>
            </div>
        </>
    )
}

export default ShowCommentEdit