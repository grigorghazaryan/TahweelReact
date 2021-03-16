import { React, useState }  from 'react';
import { Image, Carousel } from 'react-bootstrap';
import slideImg1 from '../../img/home-slider/Untitled-3.jpg';
import slideImg2 from '../../img/home-slider/Untitled-1.jpg';
import slideImg3 from '../../img/home-slider/Untitled-2.jpg';
import slideImg4 from '../../img/home-slider/Untitled-4.jpg';

function HomeCarousel (props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
            <Carousel 
             slide={true}
             fade ={true} 
             className=" banner " 
             nextIcon = {<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>}
             prevIcon = {<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>} 
             indicators = {false}>
                <Carousel.Item className="slide-1">
                <Image src={slideImg1} className="d-block w-100 banner__img" alt="slide"/>
                    <Carousel.Caption>
                    <div className="container container--max">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                                    <div className="banner__text">
                                    <h5>[Film]</h5>
                                    <p>Cost, Quality, Performance, Reliability, Serviceability And User Features Are The Characteristics Sought In By Tahweel</p>				      		
                                    </div>	
                                    <div className="banner__link">
                                        <a href="#">VIEW CATALOGUE</a>
                                        <a href="#">LEARN MORe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slide-2">
                <Image src={slideImg2} className="d-block w-100 banner__img" alt="slide"/>
                    <Carousel.Caption>
                        <div className="container container--max">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                                    <div className="banner__text">
                                    <h5>[Agriculture]</h5>
                                    <p>Cost, Quality, Performance, Reliability, Serviceability And User Features Are The Characteristics Sought In By Tahweel</p>				      		
                                    </div>	
                                    <div className="banner__link">
                                        <a href="#">VIEW CATALOGUE</a>
                                        <a href="#">LEARN MORe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="slide-3">
                    <Image src={slideImg3} className="d-block w-100 banner__img" alt="slide"/>

                    <Carousel.Caption>
                        <div className="container container--max">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                                    <div className="banner__text">
                                    <h5>[Pipes]</h5>
                                    <p>Cost, Quality, Performance, Reliability, Serviceability And User Features Are The Characteristics Sought In By Tahweel</p>				      		
                                    </div>	
                                    <div className="banner__link">
                                        <a href="#">VIEW Website</a>
                                        <a href="#">LEARN MORe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={slideImg4} className="d-block w-100 banner__img" alt="slide"/>

                    <Carousel.Caption>
                        <div className="container container--max">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                                    <div className="banner__text">
                                    <h5>[Stretch]</h5>
                                    <p>Cost, Quality, Performance, Reliability, Serviceability And User Features Are The Characteristics Sought In By Tahweel</p>				      		
                                    </div>	
                                    <div className="banner__link">
                                        <a href="#">VIEW CATALOGUE</a>
                                        <a href="#">LEARN MORe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default HomeCarousel ;