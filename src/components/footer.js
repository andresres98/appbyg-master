import logo from '../assets/logo_byg_app.png';
import Container from 'react-bootstrap/Container';
import instagram from '../assets/icons8-instagram-30.png';
import whatsapp from '../assets/icons8-whatsapp-30.png';

export default function AppFooter(){
    return(
      <Container fluid>
      <div className="footer-wrapper">  
      <div className="socialmedia">
       <ul className="socialList">
         <li><a href=""><img src={instagram} alt='instagram' /><span>@browniesygalletas_</span></a></li>
         <li><a href=""><img src={whatsapp} alt='whatsapp' /><span>310 403 84 20</span></a></li>
       </ul>
     </div>
      <div className="center">
         <img className="logo" src={logo} alt='logo' />
       </div>
       <div className="copyright">&copy; 2020 Brownies y Galletas</div>
     </div>
   </Container>
    );
}