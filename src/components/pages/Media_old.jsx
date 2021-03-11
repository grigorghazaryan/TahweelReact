import React, { useState } from 'react';
import { Image, Collapse } from 'react-bootstrap';
import Image02 from '../../img/Media/Image02.jpg';
import Image01 from '../../img/Media/image.jpg';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
    <div className = 'slick-next slick--slider--arrow' onClick={onClick}><svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
    <div className = 'slick-prev slick--slider--arrow' onClick={onClick}><svg width='1em' height='1em' viewBox='0 0 16 16' className='bi bi-chevron-down' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg></div>
    );
  }

function Media(props){
    const [open, setOpen] = useState(false);
    AOS.init({
        once : true
    });
    document.addEventListener('scroll', function(e) {
        AOS.init({
            once : true,
        });
    });
    const settings = {
        dots: false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
    };
    return(
        <div className="media overflow--hidden">
            <div className="container container--medium">
                <div className="col-md-12 col-sm-12">
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <h1 className=" page--title media__title">{`Tahweel
                        `}<span>News & Media Center</span></h1>
                        <hr className="media__title__line page--title__line" />
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <Slider {...settings} className="media--slider" >
                            <div>
                                {/* <div  data-toggle="collapse" data-target="#mediaInfo" aria-expanded="false" aria-controls="mediaInfo" className="media--slider__slide"> */}
                                <div onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>    
                                    <div className="media--slider__slide__info" > 
                                        <Image src={Image02} className="media--slider__slide__info__img"/>

                                        <div className="media--slider__slide__info__text slider--text">
                                            <div>
                                                <h2>XYZ 1</h2>
                                                <p>{`Cost, Quality, Performance, Reliability, 
                                                    Serviceability And User Features Are..`}</p>
                                            </div>
                                            <div className="layer"></div>
                                            
                                        </div>
                                        
                                        <div className="media--slider__slide__info__icon slider--icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>	
                                        </div>	
                                                                
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>  
                                    <div className="media--slider__slide__info">
                                        <Image src={Image01} className="media--slider__slide__info__img"/>
                                        <div className="media--slider__slide__info__text slider--text">
                                            <div>
                                                <h2>XYZ 2</h2>
                                                <p>{`Cost, Quality, Performance, Reliability, 
                                                    Serviceability And User Features Are..`}</p>
                                            </div>
                                            <div className="layer"></div>
                                        </div>
                                        
                                        <div className="media--slider__slide__info__icon slider--icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>	
                                        </div>	
                                                                
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>  
                                <div className="media--slider__slide__info">
                                        <Image src={Image02} className="media--slider__slide__info__img"/>
                                        <div className="media--slider__slide__info__text slider--text">
                                            <div>
                                                <h2>XYZ 3</h2>
                                                <p>{`Cost, Quality, Performance, Reliability, 
                                                    Serviceability And User Features Are..`}</p>
                                            </div>
                                            <div className="layer"></div>
                                        </div>
                                        
                                        <div className="media--slider__slide__info__icon slider--icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>	
                                        </div>	
                                                                
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>  
                                <div className="media--slider__slide__info">
                                        <Image src={Image01} className="media--slider__slide__info__img"/>
                                        <div className="media--slider__slide__info__text slider--text">
                                            <div>
                                                <h2>XYZ 4</h2>
                                                <p>{`Cost, Quality, Performance, Reliability, 
                                                    Serviceability And User Features Are..`}</p>
                                            </div>
                                            <div className="layer"></div>
                                        </div>
                                        
                                        <div className="media--slider__slide__info__icon slider--icon">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                            </svg>	
                                        </div>	
                                                                
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        {/* </div> */}
                    </div>

                </div>

                <div className="col-md-12 col-sm-12">
                    {/* <div className="collapse" id="mediaInfo"> */}
                           <Collapse in={open}>
                           <div className="media--slider__bottom__info">
                            
                                <div className="row">
                                    <div className="col-md-9">
                                        <h2 className="media--slider__bottom__info__title"> Interpack Exhibition In Düsseldorf, Germany</h2>
                                    </div>
                                    <div className="col-md-3">
                                        <p  className="media--slider__bottom__info__date">April 7, 2014</p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="media--slider__bottom__info__text">
                                           { `With leading technological developments and presence in Asia, Europe, America and North Africa, Tahweel has set a new industry standard for production line innovation, becoming one of the most outstanding companies in their market, tear and puncture resistance. 
                                            
                                            Specialized in the production of high versatile Pallet-Wrap Stretch Film with a unique combination of strength, tear and puncture resistance, tear and puncture resistance. 
                                            
                                            In order to provide the best customer service and support, Tahweel has made a strong bid expanding its warehouses in strategic locations to ensure an excellent distribution service among with future investments in new film processes and applications.`}
                                            </p>
                                    </div>
                                </div>
                            
                            </div>
                            </Collapse>
                    {/* </div> */}
                </div>
                

            </div>
        </div>
    )
}

export default Media ;
