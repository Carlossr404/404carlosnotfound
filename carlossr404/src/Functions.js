import Carousel from 'react-bootstrap/Carousel';
import './App.css'

export function Banner(){
    return(
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img 
                className='Carousel-image'
                src='blank.jpg'
                alt='First Slide'/>
                <Carousel.Caption>
                    <h0>Experience</h0>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className='Carousel-image'
                src='blank.jpg'
                alt='Second Slide'/>
                <Carousel.Caption>
                    <h1>Publications</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className='Carousel-image'
                src='blank.jpg'
                alt='Third Slide'/>
                <Carousel.Caption>
                    <h1>Community Involvement</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

