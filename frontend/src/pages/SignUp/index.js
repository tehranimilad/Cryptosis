import { useState } from 'react';
import { userSignUp } from '../../utils/api';
import { useNavigate } from "react-router-dom"
import { Image } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SignUp = (props) => {
    const [formData, setFormData] = useState({ username: '', password: ''})
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userSignUp(formData)
        .then((data) => {
            localStorage.username = data.user.username
            localStorage.userId = data.user._id
            localStorage.token = data.token
        })
        props.setIsLoggedIn(true)
        navigate('/forum')

     
    }


    return(
        <>
        <div className="signup-image"/>
        <div className="Login-Signup-Div">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png" width="15%" fluid /> 

        <h1>Sign Up</h1>
        <Form>
        <Form.Group className="mb-4" controlId="formBasicUsername" >
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="text" 
        className="form-control" 
        name="username" 
        onChange={handleChange} 
        value={formData.username}
        placeholder="Enter Username"/>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        className="form-control" 
        name="password" 
        onChange={handleChange} 
        value={formData.password}
        placeholder="Enter Password"/>
        <Form.Text className="text-muted"> 
        We'll never share your information with anyone.
        </Form.Text>
        </Form.Group>
        <Button id="Login-Signup-But" variant="primary" type="submit" onClick={handleSubmit}>
        Sign Up
        </Button>
        </Form>
        </div>
</>
    )}
export default SignUp