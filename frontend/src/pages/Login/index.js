import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { userLogin } from "../../utils/api"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { Image } from "react-bootstrap"



const LogIn = (props) => {
  const navigate = useNavigate()
    // Log in form values are empty initially 
    const [formData, setFormData] = useState({ username: '', password: ''})
    // Set the form data state to the key of your event target (username or password), and the value of what is typed
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    // 
    function handleSubmit(event) {
      // Prevent page from reloading
        event.preventDefault()
        // check if password is null or undefined
        if (!formData.password) {
          alert("Please enter your password.")
          return
        }
        // Deconstructing data to set the local storage token equal to the token we created in our login route
        userLogin(formData)
            .then((data) => {
              if(data.user){
              localStorage.username = data.user.username
              localStorage.userId = data.user._id
              localStorage.token = data.token
              props.setIsLoggedIn(true)
            } else {
              alert("Incorrect username or password. Please try again.")
            }
            })
            .catch(err => alert("Incorrect username or password. Please try again."))
        // Sets our loggedin state (passed down in props to true)
        navigate('/home')
        // setTimeout(() => window.location.reload(), 100)
    }


    return(
        <>
        <div className="signup-image" />
        <div className="Login-Signup-Div2">    
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png" width="15%" fluid /> 
        
        <h1>Log In</h1>
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
    Login
  </Button>
  <Form.Group className="mb-4">
    <br />
             or
  </Form.Group>
  
  <Form.Group className="mb-4">
  <Button variant="secondary" href="/signup" id="Signup-But">Sign Up</Button>
  </Form.Group>

</Form>
</div>

        </>
    )
}
export default LogIn