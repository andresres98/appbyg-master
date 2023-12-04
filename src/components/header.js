import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo_byg_app.png';
import lupa from '../assets/icons8-lupa-30 (1).png';
import carrito from '../assets/icons8-carrito-de-compras-30.png';
import usuario from '../assets/icons8-usuario-30.png';
import pagebrownie from '../pages/brownie';
import pagegalleta from '../pages/galleta';
import pageminicake from '../pages/minicake';
import { Link } from 'react-router-dom';


export default function AppHeader(){
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <li className="nav-item">
              <Link className='nav-link' to="/"> Home </Link>
            </li>
           <li className="nav-item"> 
              <Link className='nav-link' to="/brownie">Brownies</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/galleta">Galletas</Link>
            </li>
            <li className="nav-item"> 
              <Link className='nav-link' to="/minicakes">MiniCakes</Link>
            </li> 
            <li className="nav-item">
              <Link className='nav-link' to="/"><img src={lupa} alt="lupa"/></Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to="/"><img src={carrito} alt="carrito"/></Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/usuario"><img src={usuario} alt="usuario"/></Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}