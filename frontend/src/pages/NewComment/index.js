import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createComments, getAllcomments } from '../../utils/api';




export default function NewComment() {
    const [commentsList, setComments] = useState([]);
    const [formData, setFormData] = useState({ 
        crypto: '',
        comment: ''
    })
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    }

    function handleSubmit(event) {
        event.preventDefault()
        createComments(formData, (data) => {
            setComments([...commentsList, data])
        })
        navigateHome()
    
    }
    return (
        <div>
            <Form>
            <Form.Group className="mb-3">
            <Form.Label className="newCommentLabel" htmlFor="Crypto">Crypto: </Form.Label>
            <Form.Control 
            name="crypto" 
            type="text"  
            onChange={handleChange} 
            required />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label className="newCommentLabel" htmlFor="description">Comment: </Form.Label> 
            <Form.Control 
            name="comment" 
            type="text" 
            onChange={handleChange} 
            required 
            />
            </Form.Group>
            <Button id="Newcomment-But" variant="primary" type="submit" onClick={handleSubmit}>Create Comment</Button>
            </Form>
        </div>
    )
}