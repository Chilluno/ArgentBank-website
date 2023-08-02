import React from "react"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { userProfile } from "../features/auth/userSlice";
import argentBankLogo from "../img/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserProfile = (e) =>{
    e.preventDefault();

    dispatch(userProfile()).then((result) => {
      if(result){
        navigate("/profile")
      }
    })
  }

  const handleUserLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } 

   return <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
        {
          localStorage.getItem("token") === null ? <div><Link to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="main-nav-icon"/>
            Sign In
         </Link></div> : <div><Link to="/profile" onClick={handleUserProfile} className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="main-nav-icon"/>
          Profile
          </Link>
          <Link to="/" onClick={handleUserLogout} className="main-nav-item"> Sign Out</Link></div>
        }
      
    </nav>
}