import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from "./img/logo.png";

// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


function NavBar() {
    return (
        <div id="container-navbar">
            <div>
                <img src={Logo} alt="Logo" className='logo' />
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
                        <li><a href='##'>Inicio</a></li>
                        <li><a href='##'>Categorías</a></li>
                        <li><a href='##'>Ofertas</a></li>
                        <li className='li-float-right'><a href='##'>Ingresar</a></li>
                        <li className='li-float-right'><a href='##'>Registrarse</a></li>
                    </ul>

                </div>



            </div>




        </div>
    )
}

export default NavBar
