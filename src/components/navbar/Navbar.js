import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'


export default function Navbar() {
  return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className='nav-link'>Home </NavLink>  {/* NavLink is a pre-defined in react so we have to import  and what ever component we are NavLinking that should be menntioned in router container component*/}
        </li>
        <li className="nav-item">
          <NavLink to="/home" className='nav-link' >Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus" className='nav-link'>AboutUs </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/careers"className='nav-link'>Careers </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/produ" className='nav-link'>products </NavLink>{/* as in routercontainer we didnt set the path so by default componenty not found component will load */}
        </li>
        <li className="nav-item"> 
          <NavLink to="/products" className='nav-link'>Products </NavLink>
        </li>
        <li className="nav-item"> 
          <NavLink to="/lazy" className='nav-link'>LazyComponent </NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
}



