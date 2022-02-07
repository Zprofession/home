import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/zprofession.png"
const Navbar = () => {
    return(
        <>
<section>
<div className="row">
<div className="col-12 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-white">
<div className="container">
  <NavLink className="navbar-brand" to="/">
    <div className="logo-frame">
    <img src={web} alt="Logo" class="logo" />
    </div>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item text-center">
        <NavLink activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/services">Services</NavLink>
      </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/projects">Projects</NavLink>
      </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/skills">Skills</NavLink>
      </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>

  </div>
</div>
</nav>
        </div>
    </div>
</section>
        </>
    )
}
export default Navbar;