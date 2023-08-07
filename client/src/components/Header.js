import React from "react"
import {Link} from "react-router-dom"
import argentBankLogo from "../img/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
  let userName;
  if(localStorage.getItem("user")){
   userName = JSON.parse(localStorage.getItem("user"));
   userName = userName.userName;
  }
  else{
    userName = "Profile";
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
         </Link></div> : <div><Link to="/profile" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="main-nav-icon"/>
          {userName}
          </Link>
          <Link to="/" onClick={handleUserLogout} className="main-nav-item">
          <FontAwesomeIcon icon={faRightFromBracket} className="main-nav-icon"/>  
            Sign Out</Link></div>
        }
      
    </nav>
}