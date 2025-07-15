import React, {useState, useEffect, } from 'react';
import { Link, Navigate ,useNavigate } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';
import logo from '../../assets/images/logo.jpg';
function Header() {
  const[show, setShow]=useState(false);
  const boxs = ['Home', 'About', 'Course', 'Online Classes','Branches','Events', 'Gallery','Contact', 'Video', 'Shop'];
  const handleClick = () => {
    setShow(s => !s);
  };
  return (
    <div className="header">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home"><img src={logo}/></a>
      <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " activeClassName="active" to="/home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active"  to="/about"> ABOUT</Link>
        </li>	
        <li className="nav-item dropdown">
         <Dropdown className="d-inline mx-2">
           <Dropdown.Toggle id="dropdown-autoclose-true">
              COURSES
           </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item  ><Link className="nav-link "  to="/course"> Kids Classes</Link></Dropdown.Item>
            <Dropdown.Item  ><Link className="nav-link "  to="/course"> Adult Classes</Link></Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
        </li>
        <li className="nav-item">
              <Link className="nav-link "  to="/classes" >ONLINE CLASSES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/branches" >BRANCHES</Link>
        </li>
        <li className="nav-item dropdown">
         <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
             EVENTS
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Painting Competition</Dropdown.Item>
            <Dropdown.Item href="#">Painting Exhibition</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
        </li>
        <li className="nav-item dropdown">
         <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            GALLERY
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item ><Link className="nav-link "  to="/gallery">Students Art Gallery</Link></Dropdown.Item>
            <Dropdown.Item ><Link className="nav-link "  to="/galley">Event Gallery</Link></Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
        </li>
          <li className="nav-item">
             <Link className="nav-link "  to="/contact" >CONTACT</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link "  to="/videos" >VIDEOS</Link>
          </li>
        <div className="shop-button">
           <Link className="nav-link button" to="/shop" >SHOP<i className="fa fa-caret-down" aria-hidden="true"></i></Link>
        </div>
        </ul>
       </div>
    </div>
  </nav> 
    </div>
  );
}

export default Header;
