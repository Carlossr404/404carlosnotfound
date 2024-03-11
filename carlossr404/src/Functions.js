import Carousel from 'react-bootstrap/Carousel';

export function Banner(){
    return(
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='holder.js/800x400?text=Firstslide&bg=f5f5f5'
                    alt='First Slide'/>
                <Carousel.Caption>
                    <h0>Sect. 0</h0>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='holder.jx/800x400?text=Second slide&bg=eee'
                    alt='Second Slide'/>
                <Carousel.Caption>
                    <h1>Sect. 1</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='holder.js/800x400?text=Third slide&bg=e5e5e5'
                    alt='Third slide'/>
                <Carousel.Caption>
                    <h2>Sect. 2</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

