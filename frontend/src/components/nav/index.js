import { Link, useNavigate } from "react-router-dom";
import TradingTicker from "../tradingTicker/tradingTicker";


function Nav(props) {
  
  const navigate = useNavigate()
  
  // Allow user to log out, clears local storage, sets login status to false, and then navigate back home.  
  const handleLogOut = () => {
      localStorage.clear()
      props.setIsLoggedIn(false)
      navigate('/')
    }

  return (
    <>
        {/* If the user is logged in, render the following content */}
        {props.isLoggedIn ? 

        <nav className="navbar mavbar-expand-lg navbar-light bg-light">
          {/* <TradingTicker /> */}
              <div className="navbar-header">
              <a className="navbar-brand" href="/">Cryptosis</a>
              </div>
            <Link to="/account" className="nav-link">Account</Link>
            <Link onClick={handleLogOut} className="nav-link">LogOut</Link>
          
        </nav>
        : 
        // If the user is not logged in, render the follwing content
        <nav className="navbar mavbar-expand-lg navbar-light bg-light">
          {/* <TradingTicker /> */}
          <div className="navbar-header">
              <a className="navbar-brand" href="/">Cryptosis</a>
              </div>
              <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
        }
      
    </>
  );
}

export default Nav;