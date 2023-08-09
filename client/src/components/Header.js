import React from "react"
import {Link} from "react-router-dom"
import argentBankLogo from "../img/argentBankLogo.png"
import { Nav } from "./Nav"



export const Header = () => {

   return <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>   
      <Nav/>   
    </nav>
}