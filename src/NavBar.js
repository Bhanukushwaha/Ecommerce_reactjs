import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, Navigate } from 'react-router-dom';  // Import useNavigate
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './Component/AuthContext'; // Move this import to the top
import './NavBars.css'
import { IoSearch } from "react-icons/io5";
const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {user_data} = useSelector((state) => state.auth);
  // let user_data22 = localStorage.getItem('login_user');
  // const user1 = JSON.parse(user_data22);
  // const navigate = useNavigate();  // Initialize useNavigate

  // const logOut = () => {
  //   localStorage.removeItem('login_user');  
  //   navigate('/login');  
  // };
  const handleLogout = () => {
    dispatch(logout()).then(() => {      
    });
  };
  const isActive = (path) => {
    return location.pathname === path;
  };
  console.log(user_data);
  if (!user_data) {
    return <Navigate to="/Login" />;
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        <img className="me-2" width="30" src="logo192.png" alt="..." />
        Best Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Link to="/" className={`nav-link ${isActive('/') ? 'actives' : ''}`}>Home </Link>
            <Link to="/About" className='nav-link'>About </Link>
            <Link to="/Product" className='nav-link'>Product </Link>
            <Link to="/Contect" className='nav-link'>Contect </Link>
            <Link to="/Studentindex" className='nav-link'>Students</Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search product here..."
                className="search-input"
              />
              <div className="search-button">
                <IoSearch />
              </div>
            </div>
          </Nav>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            {!user_data ? (
              <Link to="/Login" className='nav-link'>Login</Link>
            ) : (
              <Link className="nav-link" style={{color:'red'}} onClick={handleLogout}>LogOut</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
