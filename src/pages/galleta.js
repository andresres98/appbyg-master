import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cookiex8pax from '../assets/cookiex8pax.jpg';
import kitdecoracion from '../assets/kitCookie.jpg';
import cookiecake from '../assets/cookieCake.jpg';
import alfajor from '../assets/alfajor.jpg';
import cookiesdecoradas from '../assets/cookiesDecoradas.jpg';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';

export default function AppGalleta(){
    return(
      <div className="App">
      <header id="header">
      <AppHeader/>
      </header>
      <main>
        <section className="catalogcookies">
        <Card style={{ width: '18rem' }} >
        <img src={cookiex8pax} alt='cookiex8pax'/>  
      <Card.Body>
        <Card.Title>Cookie x 8-10 porciones</Card.Title>
        <Card.Text>
          Pide tus Cookies!
        </Card.Text>
        <Button variant="link">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }} >
    <img src={kitdecoracion} alt='kitdecoracion'/>  
      <Card.Body>
        <Card.Title>Kit Decoracion de Galletas</Card.Title>
        <Card.Text>
          Pide tus Galletas!
        </Card.Text>
        <Button variant="link">Agregar al carrito</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} >
    <img src={cookiecake} alt='cookiecake'/>
      <Card.Body>
        <Card.Title>Cookie-Cake</Card.Title>
        <Card.Text>
          Pide tu Cookie-Cake!
        </Card.Text>
        <Button variant="link">Agregar al carrito</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} >
    <img src={alfajor} alt='alfajor'/>  
     <Card.Body>
       <Card.Title>Alfajores</Card.Title>
       <Card.Text>
         Pide tus alfajores!
       </Card.Text>
       <Button variant="link">Agregar al carrito</Button>
     </Card.Body>
   </Card>
   
   <Card style={{ width: '18rem' }} >
   <img src={cookiesdecoradas} alt='cookiesdecoradas'/>  
     <Card.Body>
       <Card.Title>Cookies Personalizadas</Card.Title>
       <Card.Text>
         Pide tus Galletas!
       </Card.Text>
       <Button variant="link">Agregar al carrito</Button>
     </Card.Body>
   </Card>
    </section>
    </main>
            <footer id="footer">
            <AppFooter/>
            </footer>
        </div>

    );
}