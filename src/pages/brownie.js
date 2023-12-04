import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import minibrowniex4 from '../assets/miniBrowniex4.jpg';
import browniex7 from '../assets/browniex7.jpg';
import browniex36 from '../assets/browniex36.jpg';
import paletabrownie from '../assets/paletaBrownie.jpg';
import pizza from '../assets/pizza.jpg';
import browniecorazon from '../assets/brownieCorazon.jpg';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';

export default function AppBrownie(){
    return(
      <div className="App">
            <header id="header">
            <AppHeader/>
            </header>
            <main>
              <section className="catalogbrownies">
              <Card style={{ width: '18rem' }} >
              <img src={minibrowniex4} alt='browniex4'/>    
            <Card.Body>
              <Card.Title>Mini Brownies x 4 unidades</Card.Title>
              <Card.Text>
                Pide tus Brownies!
              </Card.Text>
              <Button variant="link">Agregar al carrito</Button>
            </Card.Body>
          </Card>
          
          <Card style={{ width: '18rem' }} >
          <img src={browniex7} alt='browniex7'/>   
            <Card.Body>
              <Card.Title>Brownies corazon x 7 unidades</Card.Title>
              <Card.Text>
                Pide tus Brownies!
              </Card.Text>
              <Button variant="link">Agregar al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} >
          <img src={browniex36} alt='browniex36'/> 
            <Card.Body>
              <Card.Title>Caja de MiniBrwonies x36 unidades</Card.Title>
              <Card.Text>
              Pide tus Brownies!
              </Card.Text>
              <Button variant="link">Agregar al carrito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} >
          <img src={paletabrownie} alt='paletabrownie'/> 
          <Card.Body>
            <Card.Title>Paletas de Brownie x 4 unidades</Card.Title>
            <Card.Text>
              Pide tus Brownie-Paletas!
            </Card.Text>
            <Button variant="link">Agregar al carrito</Button>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }} >
        <img src={pizza} alt='pizza'/> 
          <Card.Body>
            <Card.Title>Pizza-Brownie x 8 porciones</Card.Title>
            <Card.Text>
              Pide tu Pizza-Brownie!
            </Card.Text>
            <Button variant="link">Agregar al carrito</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} >
        <img src={browniecorazon} alt='browniecorazon'/> 
          <Card.Body>
            <Card.Title>Brownie Corazón- Big Heart</Card.Title>
            <Card.Text>
              Pide tus Brownies!
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