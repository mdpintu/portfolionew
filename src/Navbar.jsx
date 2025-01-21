import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './images/logo.png'
import 'font-awesome/css/font-awesome.min.css';
const Navbar = () => {

const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () =>{
  theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");

  };
  useEffect(() => {
    document.body.className = theme;
  },[theme]);




  return (
    <>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink> */}
    <NavLink className="navbar-brand" to="/"><h1><span>MD</span> Pintu</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse custom-ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project">Project</NavLink>
        </li>
        
      </ul>
      <div className="light-mode">
        <ul>
        <li className="nav-item">
          <NavLink className="nav-link" to="/hireme"><button className='btn btn-default'>Hire Me</button></NavLink>
        </li>
        <li className="nav-item">
         <a href="#" className='btn btn-primary' onClick={()=>toggleTheme()}><i class="fa fa-moon-o" aria-hidden="true"></i></a>
        </li>
        </ul>
      </div>
     
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
    </>
  )
}

export default Navbar
