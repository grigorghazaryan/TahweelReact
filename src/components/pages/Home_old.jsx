import React  from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import aboutImg from '../../img/AboutTahweel.jpg';
import ManufacturingImg from '../../img/Home/Manufacturingexcellency.jpg';
import GualityassuranceImg from '../../img/Home/Gualityassurance.jpg';
import ProductengineeringImg from '../../img/Home/Productengineering.jpg';
import Delivery from '../../img/Home/Delivery.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeCarousel from '../global/HomeCarousel'
import HomeTab from '../global/HomeTab'





function Home (props) {
        // const [index, setIndex] = useState(0);
      
        // const handleSelect = (selectedIndex, e) => {
        //   setIndex(selectedIndex);
        // };

        /* scroll animation start */

    AOS.init({
        once : true
    });
    document.addEventListener('scroll', function(e) {
        AOS.init({
            once : true,
        });
    });
    /* scroll animation end */
    return (
        <div className="home">
            <HomeCarousel/>
            {/* <div id="banner" className="carousel slide banner carousel-fade"  data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                            <Image src={slideImg1} className="d-block w-100 banner__img" alt="First slide"/>
                    <div className="carousel-caption slide-1">
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
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src={slideImg2} className="d-block w-100 banner__img" alt="First slide"/>
                    
                    <div className="carousel-caption slide-2">
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
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src={slideImg3} className="d-block w-100 banner__img" alt="First slide"/>

                    <div className="carousel-caption slide-3">
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
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src={slideImg4} className="d-block w-100 banner__img" alt="First slide"/>

                    <div className="carousel-caption">
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
                    </div>
                </div>
                <a className="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#banner" role="button" data-slide="next">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div> */}

            <div className="home--about overflow--hidden">	
                <div className="container container--medium">
                    <div className="row home--about__content">
                        
                        
                        <div className="col-md-6 col-xs-12">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="home--about__content__img">
                                <Image src={aboutImg} />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 home--about__content__text">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h1 className=" home--about__content__text__title">About <span> Tahweel</span></h1>
                                <hr className=" home--about__content__text__line" />
                                <p className=" home--about__content__text__text">Tahweel Integrated Company has a competitive strategic position in the world of Cast Pallet-Wrap Stretch Film market. With a state of the art industrial plant in Saudi Arabia (Rabigh), Tahweel provides quality driven, cost effective and innovative tailor made industrial solutions to Asian and European countries.</p>
                                {/* <a href="about.html"  className=" home--about__content__text__link">Read More</a> */}
                                <NavLink to="/about"  className = "home--about__content__text__link">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="home--why overflow--hidden">
                <div className="container container--medium">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <h2 className="home--why__title">Why <span> Tahweel</span></h2>
                            <hr className="home--why__line" />
                        <div className="row">
                        
                            <ul className="nav nav-tabs home--why__tab">
                                    <li className="nav-item">                                
                                            <a className="nav-link home--why__tab__nav--link" data-toggle="tab" href="#tab1">
                                                <div data-aos="fade-right" data-aos-duration="1000">
                                                    <div className="home--why__tab__nav--link__content link__active">
                                                        <Image src={ManufacturingImg} alt="ManufacturingImg"/>

                                                        <h2> {`Manufacturing 
                                                        Excellency`} </h2>
                                                        <div className="home--why__tab__nav--link__content__arrow why__arrow">
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                            </svg>	
                                                        </div>	
                                                                                
                                                    </div>
                                                </div>
                                            </a>
                                    </li>
                                    <li className="nav-item">
                                            <a className="nav-link home--why__tab__nav--link" data-toggle="tab" href="#tab2">
                                                <div data-aos="fade-left" data-aos-duration="1000">
                                                    <div className="home--why__tab__nav--link__content link__active">
                                                    <Image src={GualityassuranceImg} alt="GualityassuranceImg"/>
                                                        <h2>{`Quality 
                                                        Assurance`}</h2>
                                                        <div className="home--why__tab__nav--link__content__arrow why__arrow">
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                            </svg>	
                                                        </div>	
                                                                                
                                                    </div>
                                                </div>
                                            </a>
                                    </li>
                                    <li className="nav-item">
                                            <a className="nav-link home--why__tab__nav--link" data-toggle="tab" href="#tab3">
                                                <div data-aos="fade-right" data-aos-duration="1000">
                                                <div className="home--why__tab__nav--link__content link__active">
                                                    <Image src={ProductengineeringImg} alt="ProductengineeringImg"/>

                                                        <h2>{`Product 
                                                        Engineering`}</h2>
                                                        <div className="home--why__tab__nav--link__content__arrow why__arrow">
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                            </svg>	
                                                        </div>	
                                                                                
                                                    </div>
                                                </div>
                                            </a>
                                    </li>
                                    <li className="nav-item">
                                            <a className="nav-link home--why__tab__nav--link" data-toggle="tab" href="#tab4">
                                                <div data-aos="fade-left" data-aos-duration="1000">
                                                
                                                    <div className="home--why__tab__nav--link__content link__active">
                                                        <Image src={Delivery} alt="Delivery"/>
                                                        <h2>Delivery</h2>
                                                        <div className="home--why__tab__nav--link__content__arrow why__arrow">
                                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                            </svg>	
                                                        </div>	
                                                                                
                                                    </div>
                                                </div>
                                            </a>
                                    </li>
                            </ul>

                            <div className="tab-content">
                                <div id="tab1" className="container tab-pane fade home--why__content"><br/>
                                <h3>Manufacturing Excellency</h3>
                                <p>Tahweel multi-layer cast film’s manufacturing technology has set a new industry standard for production line innovation. With the wide range of different load wrapping specifications that exist today, and the wide variety of machinery used to wrap loads, an extensive range in types and sizes of films are required for manufacturers to attain the best results possible.<br/><br/>
                                    With Tahweel, we offer a complete range of films to ensure that our supply of films match both load and machine load-wrapping requirements in the most efficient and effective manner.</p>

                                </div>
                                <div id="tab2" className="container tab-pane fade home--why__content"><br/>
                                <h3>Quality Assurance</h3>
                                <p>Quality has always been Tahweel's primary concern. Therefore, the company has always invested in state of the art equipment, technology and human resources with a global experience. 
                                    <br/><br/>
                                    The company's quality concept is strictly implemented right from the receipt of raw materials through the manufacturing process, premises, equipment, laboratory tests, inspection and shipment. 
                                    <br/><br/>
                                    Our quality control, advanced high end lab equipment, ensures customer satisfaction of our products. We keep track of our products quality, to ensure the quality of our products after sales.</p>
                                </div>
                                <div id="tab3" className="container tab-pane fade home--why__content"><br/>
                                <h3>Product Engineering</h3>
                                <p>Cost, quality, performance, reliability, serviceability and user features are the characteristics sought in by Tahweel to render its product attractive to its global market. The endeavors include developing the concept of the product and the design for a sustainable delivery of solutions.</p>
                                </div>
                                <div id="tab4" className="container tab-pane fade home--why__content"><br/>
                                <h3>Delivery</h3>
                                <p>Having a giant warehouse adjacent to manufacturing site in Saudi Arabia, stocks are monitored and pre-determined quantities of products are in place to ensure just-on-time delivery to Clients. 
                                    <br/><br/>
                                    Tahweel's full-fledged logistic departments ensure proper documentations and uses the best fleet services to secure on time deliveries to clients.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <HomeTab/>
        </div>
    )
    
}

export default Home ;