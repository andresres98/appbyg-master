import Carousel from 'react-bootstrap/Carousel';
import brownie from '../assets/miniBrownie.jpg';
import galleta from '../assets/galletas-navidad-fondo-madera.jpg';
import ingredientes from '../assets/ingredientes.jpg';



export default function AppHero(){
    return(
        <section id="home" className='hero-block' >
            <Carousel className="custom-carousel">
      <Carousel.Item>
        <img src={brownie} alt='first'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={galleta} alt='second' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ingredientes} alt='third'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </section>
    );
}