import Carousel from 'react-bootstrap/Carousel';

export function Banner(){
    return(
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img 
                src="blank.jpg"
                alt='First Slide'
                width="1000"
                height="500"/>
                <Carousel.Caption>
                    <h0>Slide 1</h0>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                src='blank.jpg'
                alt='Second Slide'
                width="1000"
                height="500"/>
                <Carousel.Caption>
                    <h1>Slide 2</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                src='blank.jpg'
                alt='Third Slide'
                width="1000"
                height="500"/>
                <Carousel.Caption>
                    <h1>Slide 3</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

