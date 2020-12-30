import React from 'react';
import { Image } from 'react-bootstrap';
import AboutTahweel from '../../img/AboutTahweel.jpg';
import environmentImg from '../../img/about/Group192.jpg';
import environmentImgIcon1 from '../../img/about/Component55–1.svg';
import environmentImgIcon2 from '../../img/about/Component43–1.svg';
import environmentImgIcon3 from '../../img/about/Component57–1.svg';
import environmentImgIcon4 from '../../img/about/Component45–1.svg';
import aboutPeopleImg from '../../img/about/Group194.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(props){
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
        <div className="about">
            <div className="about--overview overflow--hidden">
            
        
                <div className="container container--medium">
                    <div className="row about--overview__content">
                        <div className="col-md-6 col-xs-12  col-lg-6 offset-lg-1 about--overview__content__text">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h1 className=" about--overview__content__text__title page--title"> <span> Overview</span></h1>
                                <hr className="about--overview__content__text__line  page--title__line" />
                                <p className="about--overview__content__text__text text--content">
                                    Tahweel is specialized in the production of highly versatile Cast Pallet-Wrap Stretch Film to the world market. The company has a plant in Saudi Arabia (Rabigh), with a reach to many markets around the globe. 
                                </p>
                                <p className="about--overview__content__text__text text--content">
                                    Tahweel acquired in shorter period of time a reputation for its products' technical excellence and high quality standards of service offered to clients. 
                                </p>
                                <p className="about--overview__content__text__text text--content">
                                    Tahweel offers only the best in quality in terms of products and integrated solutions, thanks to its research and development strategies.
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-xs-12 col-lg-5">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="about--overview__content__img rounded--img">
                                    <Image src={AboutTahweel}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="about--integrated overflow--hidden">
            
        
                <div className="container container--medium">
                    <div className="row about--integrated__content">
                        <div className="col-md-12 col-xs-12  col-lg-11 offset-lg-1 about--integrated__content__text">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h2 className=" about--integrated__content__text__title page--title"> Tahweel <span>Integrated</span></h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12  col-lg-5 offset-lg-1">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <p className="about--integrated__content__left text--content">Tahweel Integrated Company has a competitive strategic position in the world of Cast Pallet-Wrap Stretch Film market. With a state of the art industrial plant in Saudi Arabia (Rabigh), Tahweel provides quality driven, cost effective and innovative tailor made industrial solutions to Asian and European countries. With long years of experience in stretch film business , Tahweel is now ranked as a prominent market player in the field with current export capacity of 130 container per month, all shipped to demanding international clients around the globe.Thanks to the annual production capacity of 45,000 metric tons of strech films planned to meet all manual, machine and power stretch film application requirements .Tahweel has advanced, top of the line and high tech European made machines, reflecting experience in the international market, tailoring extrusion lines to customer requirements. Tahweel will keep on adopting the leading technological developments in the machinery and methods used to secure and protect items of all kinds and loads of all sizes, to enable achieving smooth operations, quality and low costs standards.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-xs-12 col-lg-4  ">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="">
                                    <p className="about--integrated__content__right text--content">Tahweel corporate mandate and objectives are to provide world markets with integrated products to meet the growing needs of the ever growing global markets. 
                                        
                                        Tahweel delivers a complete range of diversified, value added, performance enhanced products for the demanding markets. 
                                        
                                        Tahweel has a set of corporate and manufacturing standards for combining excellent products pricing with outstanding quality. 
                                        
                                        Tahweel is commitment to business integrity, product quality, client services and environmental responsibility. The company's relationship with business stakeholders are built to last.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="about--mission  overflow--hidden">
            
        
                <div className="container container--medium">
                    <div className="row about--mission__content">
                        <div className="col-md-6 col-xs-12  col-lg-3 offset-lg-1 about--mission__content__text">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h2 className=" about--mission__content__text__title page--title">Mission 
                                    <span>& Vision</span></h2>
                                <hr className="about--mission__content__text__line  page--title__line" />
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-xs-12 col-lg-6 offset-lg-1">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="">
                                    <div className="about--mission__content__info">
                                        <h2 className="about--mission__content__info__subtitle">Mission</h2>
                                        <p  className="about--mission__content__info__text text--content">To achieve excellence collectively in terms of quality, innovation and service by offering eco-friendly products and a proactive consolidated presence in all local, regional and global markets.</p>
                                    </div>
                                    <div className="about--mission__content__info">
                                        <h2 className="about--mission__content__info__subtitle">Vision</h2>
                                        <p  className="about--mission__content__info__text text--content">To be recognized as a worldwide leader in the stretch film production, building on our growing reliability to partners, offering packaging solutions for customers, through innovation, eco-sustainability and the best price-quality ratio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="about--around--the--world overflow--hidden">
        
                <div className="container container--max">
                    <div className="row about--around--the--world__content">
                        <div className="col-md-12 col-xs-12  col-lg-12 about--around--the--world__content__text">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h2 className=" about--around--the--world__content__text__title page--title">Tahweel 
                                    <span>Around The World</span></h2>
                                <hr className="about--around--the--world__content__text__line  page--title__line" />
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12 col-lg-6  offset-lg-2">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="about--around--the--world__content__right">
                                    <p className="about--around--the--world__content__right__text text--content">Tahweel is a global supplier for flexible packaging solutions, known for its outstanding quality Continuously improving its service and quality standards. 
                                        
                                        Tahweel has been a genuine market leader for setting high quality standards in the flexible packaging industry by partnering with leading global brands. 
                                        
                                        Tahweel owns outstanding production facilities in the world with style of construction, infrastructure and high technology of production and scale.
                                        </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            <div className="about--environment overflow--hidden">
            
        
                <div className="container container--medium">
                    <div className="row about--environment__content">
                        <div className="col-md-6 col-xs-12  col-lg-6 about--environment__content__text">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h2 className=" about--environment__content__text__title page--title">Environment 
                                    <span>Health & Safety</span></h2>
                                <hr className="about--environment__content__text__line  page--title__line" />
                                <div className="about--environment__content__text__img rounded--img">
                                    
                                    <Image src={environmentImg}/>
                                </div>
                                <p className="about--environment__content__text__text text--content">Tahweel develops partnerships between departmental personnel to ensure a safe work environment and compliance with the company's policy and applicable regulations in the most efficient manner possible. These endeavors include waste disposal, recycling, clean environment, elimination of noise pollution and harmful gases.
                                </p>
                                
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-xs-12 col-lg-5 offset-lg-1">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="about--environment__content__img rounded--img">
                                    <Image src={environmentImg}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row about--environment__info">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon1} className="about--environment__info__cart__image"/>
                                    {/* <img src="assets/img/about/Component 55 – 1.svg" alt="" className="about--environment__info__cart__image"/> */}
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>Tahweel's policy and applicable regulations ensures no harmful fumes/gasses are discharged into the air</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon2} className="about--environment__info__cart__image"/>
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>Tahweel's policy and applicable regulations ensures no toxic waste is discharged to the environment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-left" data-aos-duration="1000">                    
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon3} className="about--environment__info__cart__image"/>
                                    {/* <img src="assets/img/about/Component 57 – 1.svg" alt="" className="about--environment__info__cart__image"/> */}
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>Tahweel has strict safety guidelines for the employees in the work environment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 col-lg-3">
                            <div data-aos="fade-left" data-aos-duration="1000">                    
                                <div className="about--environment__info__cart">
                                    <Image src={environmentImgIcon4} className="about--environment__info__cart__image"/>
                                    {/* <img src="assets/img/about/Component 45 – 1.svg" alt="" className="about--environment__info__cart__image"/> */}
                                    <div className="about--environment__info__cart__text text--content">
                                        <p>Tahweel offers work place and employee awareness programs/workshops</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about--people overflow--hidden">
                <div className="container container--medium">
                    <div className="row about--people__content">
                        <div className="col-md-6 col-xs-12  col-lg-6  about--people__content__img">
                            
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className=" rounded--img">
                                    <Image src={aboutPeopleImg}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-xs-12 col-lg-6 about--people__content__text">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h2 className=" about--people__content__text__title page--title"> Tahweel's <span>People</span></h2>
                                <hr className="about--people__content__text__line  page--title__line" />
                                <div className="about--people__content__text__img rounded--img">
                                <Image src={aboutPeopleImg}/>
                                </div>
                                <p className="about--people__content__text__text text--content">
                                    Since establishment, Tahweel's culture that incorporates friendliness, kindness, integrity, and compassion has been evolving. Allowing it to become one of our most distinguishing characteristic. our employee's indivisual commitment to such values drives Tahweel, and ultimately result in the company's successes. Satisfying our clients with innovative technology and superior quality, value and service, We relentlessly invest in and developing our employee's talents, ingenuity and leadership towards stable and sustainable growth.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )

}

export default About ;
