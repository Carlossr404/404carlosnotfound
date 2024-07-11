import Carousel from 'react-bootstrap/Carousel';
import './App.css'

/**
 * 
 * @returns 
 */
export function Banner(){
    return(
        <Carousel data-bs-theme="dark" className='banner'>
            <Carousel.Item onClick={() => window.location.replace("/#exp")}>
                <h1 className='banner-header'>EXPERIENCE</h1>
                <div>
                    <img src='imgs/experience_img.png' alt='collage' className='banner-image'/>
                </div>
                </Carousel.Item>
            <Carousel.Item onClick={() => window.location.replace("/#projects")}>
                <h1 className='banner-header'>PROJECTS</h1>
                <div className='banner-image'>
                    <img src='blank.jpg' alt='Second Slide'/>
                </div>
            </Carousel.Item>
            <Carousel.Item onClick={() => window.location.replace("/#pubs")}>
                <h1 className='banner-header'>PUBLICATIONS</h1>
                <div className='banner-image'>
                    <img src='blank.jpg' alt='Third Slide'/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

/**
 * Experience
 * props: String={title, company, location, date} StringArray={desc}  
 * @returns a div block containing relevant work experience information
 */
export function Experience({logo, title, company, location, date, desc}){
    return (
        <div className='exp-block'>
            <h3>
                <img src={logo} alt='company logo' className='logo'/>
                {title}
            </h3>
            <h4>{company} | {location} | {date}</h4>
            <ul>
                {desc.map((line) => (
                    <li>{line}</li>
                ))}
            </ul>
        </div>
    );
}

