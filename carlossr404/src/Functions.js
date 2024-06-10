import Carousel from 'react-bootstrap/Carousel';
import './App.css'

export function Banner(){
    return(
        <Carousel data-bs-theme="dark" className='banner'>
            <Carousel.Item onClick={() => window.location.replace("/#exp")}>
                <div className='banner-image'>
                    <img src='blank.jpg' alt='First Slide'/>
                </div>
                <Carousel.Caption>
                    <h1>Experience</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={() => window.location.replace("/#projects")}>
                <div className='banner-image'>
                    <img src='blank.jpg' alt='Second Slide'/>
                </div>
                <Carousel.Caption>
                    <h1>Projects</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={() => window.location.replace("/#pubs")}>
                <div className='banner-image'>
                    <img src='blank.jpg' alt='Third Slide'/>
                </div>
                <Carousel.Caption>
                    <h1>Publications</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

