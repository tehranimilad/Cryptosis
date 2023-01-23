import { Link, useNavigate } from "react-router-dom";
import './nav.css'



function Nav(props) {
  
  const navigate = useNavigate()
  
  // Allow user to log out, clears local storage, sets login status to false, and then navigate back home.  
  const handleLogOut = () => {
      localStorage.clear()
      props.setIsLoggedIn(false)
      navigate('/forum')
    }

    return (
      <nav className="navbar mavbar-expand-lg navbar-light bg-black">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Cryptosis</a>
        </div>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/cryptocurrencies" className="nav-link">Crypto Prices</Link>
        {props.isLoggedIn ? (
          <>
            <Link to="/account" className="nav-link">Account</Link>
            <Link to="/newcomment" className="nav-link">New Post</Link>
            <Link onClick={handleLogOut} className="nav-link">LogOut</Link>
          </>
        ) : (
          <>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        )}
      </nav>
    );
  }

export default Nav;