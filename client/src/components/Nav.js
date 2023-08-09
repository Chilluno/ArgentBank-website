import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from "react-router-dom"
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/user/userSlice"

export const Nav = () => {
   
   const hasToken = useSelector((state) => state.user.token);
   const userName = useSelector((state) => state.user.userInfo.userName);

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleUserLogout = (e) => {
     e.preventDefault();
     localStorage.removeItem("token");
     dispatch(reset());
     navigate("/");
   } 

if(!hasToken){
   return (  
      <Link to="/login" className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} className="main-nav-icon" />
      Sign In
      </Link>
  );
}
else{ 
      return <div>
      <Link to="/profile" className="main-nav-item">
        <FontAwesomeIcon icon={faUserCircle} className="main-nav-icon" />  
        {userName}
      </Link>
      <Link to="/" onClick={handleUserLogout} className="main-nav-item">
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="main-nav-icon"
        />
        Sign Out
      </Link>
    </div>
    }  
}


/* <div><Link to="/login" className="main-nav-item">
<FontAwesomeIcon icon={faUserCircle} className="main-nav-icon"/>
  Sign In
</Link>
</div> */