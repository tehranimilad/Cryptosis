import React, { useState, useEffect } from 'react';
import '../src/index.css';
import { Routes, Route } from "react-router-dom";
import MyNavbar from './components/nav';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import NewComment from './pages/NewComment';
import AccountPage from './pages/AccountPage';
import ShowCommentEdit from './pages/CommentEdit';
import LandingPage from './pages/LandingPage';
import CryptoDeepDive from './pages/CryptoDeepDive';
import PageNotFound from './pages/PageNotFound';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [userName, setUserName] = useState()
  
  useEffect(() => {
    // If local storage token exists then: 
    if (localStorage.token) {
      // Set the User as Logged In
      setIsLoggedIn(true)
      setUserName(localStorage.getItem('username'))
      // Set the loading status to false
      setIsLoading(false)
    } else {
      // If the token doesn't exists, page will load with the original empty current user state.
      setIsLoading(false)
    }
    
  }, [isLoggedIn])

  
  return (
    <>
    {isLoading ?
    <div>Loading...</div>
    :
    <main>

      <MyNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
        <Routes>
          <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LogIn setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/newcomment" element={<NewComment/>} />
          <Route path="/commentedit/:id" element={<ShowCommentEdit />} />
          <Route path="/account" element={<AccountPage username={userName} currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/cryptocurrencies" element={<CryptoDeepDive />} />
          <Route path="/:error" element={<PageNotFound />} />
        </Routes>
        
    </main>}
    </>
  );
}

export default App;