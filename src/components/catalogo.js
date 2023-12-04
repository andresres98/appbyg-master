import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import minibrownies from '../assets/miniBrownies.jpg';
import galletasDecoradas from '../assets/galletasDecoradas.jpg';
import miniCakes from '../assets/memeCakes.jpg';

export default function AppCatalogo(){
    return(
        <section className="card-container">
        <Card className="custom-card"style={{ width: '25rem'}} >
      <img src={minibrownies} alt='catalogobrownie'/>
      <Card.Body>
        <Card.Title>Brownies</Card.Title>
        <Card.Text>
        Sumérgete en un mundo de sabores tentadores y texturas 
        irresistibles con nuestra variedad única de brownies artesanales!
        </Card.Text>
        <Button variant="primary">Ir al catálogo</Button>
      </Card.Body>
    </Card>
    
    <Card className="custom-card" style={{ width: '25rem' }} >
      <img src={galletasDecoradas} alt='catalogogalletas'/>
      <Card.Body>
        <Card.Title>Galletas</Card.Title>
        <Card.Text>
        Explora sabores irresistibles y texturas tentadoras con nuestra 
        exquisita selección de galletas artesanales!
        </Card.Text>
        <Button variant="primary">Ir al catálogo</Button>
      </Card.Body>
    </Card>

    <Card className="custom-card" style={{ width: '25rem' }} >
      <img src={miniCakes} alt='catalogocakes'/>
      <Card.Body>
        <Card.Title>MiniCakes</Card.Title>
        <Card.Text>
        Pequeños MiniCakes ideales para celebrar momentos extraordinarios.
        </Card.Text>
        <Button variant="primary">Ir al catálogo</Button>
      </Card.Body>
    </Card>
    </section>

    );

  }