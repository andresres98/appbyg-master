import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import minicake from '../assets/miniCake.jpg';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';

export default function AppMnicake() {
    return(
      <div className="App">
      <header id="header">
      <AppHeader/>
      </header>
      <main>
        <section className="catalogminicakes">
        <Card style={{ width: '18rem' }} >
        <img src={minicake} alt='minicake'/>    
      <Card.Body>
        <Card.Title>Mini Cake Vainilla</Card.Title>
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