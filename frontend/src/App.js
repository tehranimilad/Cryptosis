import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MyNavbar from './components/nav';
import { getToken } from './utils/api';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NewComment from './pages/NewComment';
import AccountPage from './pages/AccountPage';
import ShowCommentEdit from './pages/CommentEdit';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  
  
  useEffect(() => {
    // If local storage token exists then: 
    if (localStorage.token) {
      // Grab the token and the user data associated with the specific token
      getToken().then(data => {setUser(data)})
      // Set the User as Logged In
      setIsLoggedIn(true)
      // Set the loading status to false
      setIsLoading(false)
    } else {
      // If the token doesn't exists, page will load with the original empty current user state.
      setIsLoading(false)
    }
    
  }, [])

  
  return (
    <>
    {isLoading ?
    <div>Loading...</div>
    :
    <main>

      <MyNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/newcomment" element={<NewComment/>} />
          <Route path="/commentedit/:id" element={<ShowCommentEdit />} />
          <Route path="/account" element={<AccountPage currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
        
    </main>}
    </>
  );
}

export default App;
