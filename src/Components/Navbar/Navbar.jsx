import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark py-2 Layout-color">
  <div className="container">
    <Link className="navbar-brand fs-1 fw-bolder" to="">Start Framework
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contacts">Contacts</NavLink>
        </li>
      
        
      </ul>
     
    </div>
  </div>
</nav>


  )
}
