import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from "./img/logo.png";
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


function NavBar() {
    return (
        <div id="container-navbar">
            <div>
                <a href="/">
                <img src={Logo} alt="Logo" className='logo' />
                </a>
            </div>
            <div id="navbar">
                <form className='navbar-search'>
                    <input type="text" placeholder='Buscar' />
                    <div className='btn-search'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="icon-search" />
                    </div>
                </form>
                <div className='nav-menu'>
                    <ul>
                        {/* <li><a href='/'>Inicio</a></li> */}
                        <li><Link to="/">Inicio</Link></li>
                        <li>
                            <div className='dropdown'>
                                <a href='/' className='dropbtn'>Categorías</a>
                                <div className='dropdown-content'>
                                    <Link to='/categoria/remera'>Remera</Link>
                                    <Link to='/categoria/pantalon'>Pantalon</Link>
                                    <Link to='/categoria/gorra'>Gorra</Link>
                                    <Link to='/categoria/calzado'>Calzado</Link>
                                    
                                </div>                                
                            </div>
                        </li>
                        <li><Link to="">Ofertas</Link></li>
                        <li className='li-float-right'><Link to="/">Registrarse</Link></li>
                        <li className='li-float-right'><Link to="/">Iniciar Sesión</Link></li>
                        <li className='li-float-right'><Link to="/cart"><CartWidget /></Link></li>
                    </ul>

                </div>



            </div>




        </div>
    )
}

export default NavBar;
