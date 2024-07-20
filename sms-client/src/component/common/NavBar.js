import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
<nav className='navv'> 
 <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div className="container-fluid">
    <Link className="nav-link px-3"  to={"/Home"}>
    Home
    </Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav"
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

  
        <li className="nav-item ">
          <Link className="nav-link px-3" aria-current="page"to={"/view-students"}>
            View Students </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3" to={"/add-students"}>
            Add Students</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link px-3" to={"/add-course"}>
            Add Courses</Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto"> 
        <li className="logoutnav">
          <Link className="nav-link px-3" to={"/AdminRegister"}>
            Logout
            <FontAwesomeIcon className='logouticon' icon={faSignOutAlt} />
          </Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
</nav> 

  )
}

export default NavBar
