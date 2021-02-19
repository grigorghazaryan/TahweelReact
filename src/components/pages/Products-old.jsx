import React from 'react';
import { Image } from 'react-bootstrap';
import Group114 from '../../img/Product/IndustrialSolutions/Group114.jpg';
import Group110 from '../../img/Product/IndustrialSolutions/Group110.jpg';
import Group117 from '../../img/Product/IndustrialSolutions/Group117.jpg';
import Group128 from '../../img/Product/PackagingSolutions/Group128.jpg';
import Group130 from '../../img/Product/PackagingSolutions/Group130.jpg';
import Group135 from '../../img/Product/PackagingSolutions/Group135.jpg';
import Group119 from '../../img/Product/Agriculture/Group119.jpg';
import Group121 from '../../img/Product/Agriculture/Group121.jpg';
import Group126 from '../../img/Product/Agriculture/Group126.jpg';
import Pipes from '../../img/Product/Pipesandfittings.jpg';



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

function Products(props){
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
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
            ]
        };
    return(
        <div className="products">
            <div className="container container--products  overflow--hidden">
                <div className="row products--industries product--content">
                        <div className="col-md-5 col-sm-12 products--industries__left">
                            <div data-aos="fade-right" data-aos-duration="1000">
                            
                                <h1 className=" page--title products--industries__left__title">Industrial 
                                    <span>Solutions</span></h1>
                                <hr className="products--industries__left__line page--title__line" />
                                <p className="text--content products--industries__left__text">
                                    All Range of industrial Solutions Film is offered as standard format and customized. Wide range of mechanical properties of the film and colours are available, for the best performance on different applications, where the film features will be fit on custom packaging lines, and thus achieve greater efficiency on saving the time and costs, which is our main objective.
                                </p>
                                <a href="#" className="products--industries__left__link products--more text--content  d-none d-md-block">View More</a>
                            </div>
                        </div>
                        <div  className="col-md-7 col-sm-12 products--industries__right">
                            <div data-aos="fade-left" data-aos-duration="1000">
                            
                                <Slider {...settings} className="product--industries--slider product--slider" >
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group114}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group110}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group117}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group110}/>

                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group117}/>

                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                   
                                                    <Image src={Group114}/>

                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group110}/>

                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    </Slider>
                                
                                <a href="#" className="products--industries__left__link products--more text--content show--on--mobile d-md-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="white--line"/>

                <div className="container container--products  overflow--hidden products--packaging__all">
                    <div className="row products--industries product--content products--packaging">
                        <div className="col-md-4 col-sm-12 products--industries__left">
                            <div data-aos="fade-right" data-aos-duration="1000">

                                <h1 className=" page--title products--industries__left__title">Packaging  
                                    <span>Solutions</span></h1>
                                <hr className="products--industries__left__line page--title__line products--packaging__left__line" />
                                <p className="text--content products--industries__left__text">
                                    The packaging solution product category arises from a solid foundation of performance and results. We offer cutting-edge packaging consumables and a wide range of colours and mechanical properties of the film to meet the needs of our customers.
                                </p>
                                <a href="#" className="products--industries__left__link products--more text--content products--packaging__left__link  d-none d-md-block">View More</a>
                            </div>
                        </div>
                        <div  className="col-md-7 col-sm-12 offset-md-1 products--industries__right">
                            <div data-aos="fade-left" data-aos-duration="1000">

                                <Slider {...settings} className="product--packaging--slider product--slider" >
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <img  src="assets/img/Product/Packaging solutions/Group 128.jpg" alt=""/>
                                                    <Image src={Group128}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group130}/>

                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <img  src="assets/img/Product/Packaging solutions/Group 135.jpg" alt=""/>
                                                    <Image src={Group135}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                <Image src={Group128}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <Image src={Group135}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                <Image src={Group130}/>

                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <Image src={Group135}/>
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    </Slider>
                                <a href="#" className="products--industries__left__link products--more text--content products--packaging__left__link d-md-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="white--line"/>

                <div className="container container--products  overflow--hidden  products--agriculture__all">
                    <div className="row products--industries product--content products--agriculture">
                        <div className="col-md-4 col-sm-12 products--industries__left">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                    
                                <h1 className=" page--title products--industries__left__title">Agriculture</h1>
                                <hr className="products--industries__left__line page--title__line products--agriculture__left__line" />
                                <p className="text--content products--industries__left__text">
                                    To ensure and significantly increase the yield while improving the quality of the crop, our Agriculture Solutions offer a wide range of applications that encompass the market major categories on sizes, specifications and different end use.
                                </p>
                                <a href="#" className="products--industries__left__link products--more text--content products--agriculture__left__link d-none d-md-block">View More</a>
                            </div>                    
                        </div>
                        <div  className="col-md-7 col-sm-12 offset-md-1 products--industries__right">
                            <div data-aos="fade-left" data-aos-duration="1000">
                            
                                <Slider {...settings} className="product--agriculture--slider product--slider" >

                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                   
                                                    <Image src={Group119} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group121} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    
                                                    <Image src={Group126} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <Image src={Group126} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <Image src={Group119} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <Image src={Group126} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="products--industries__right__slider--content product--slider--hover">
                                            <a href="#">
                                                <div className="products--industries__right__slider--content__img product--slider--hover__img">
                                                    <Image src={Group121} />
                                                </div>
                                                <p  className="products--industries__right__slider--content__title text--content">T15-HR & JUMBO</p>
                                            </a>
                                        </div>
                                    </div>
                                </Slider>
                                
                                <a href="#" className="products--industries__left__link products--more text--content products--agriculture__left__link d-md-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="white--line"/>
                <div className="container container--products  overflow--hidden products--pipes__all">
                    <div className="row products--industries product--content products--pipes">
                        <div className="col-md-4 col-sm-12 products--industries__left">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h1 className=" page--title products--industries__left__title products--pipes__left__title">Pipes 
                                    <span>& Fittings</span></h1>
                                <hr className="products--industries__left__line page--title__line products--pipes__left__line" />
                                <p className="text--content products--industries__left__text">
                                    To ensure and significantly increase the yield while improving the quality of the crop, our Agriculture Solutions offer a wide range of applications that encompass the market major categories on sizes, specifications and different end use.
                                </p>
                                <a href="#" className="products--industries__left__link products--more text--content products--pipes__left__link d-none d-md-block">View More</a>
                            </div>
                        </div>
                        <div  className="col-md-7 col-sm-12 offset-md-1 products--pipes__right">
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <div className="products--pipes__right__content">
                                    <div className="products--pipes__right__content__info">
                                        <img  className="products--pipes__right__content__info__img" src="assets/img/Product/Pipes and fittings.jpg" alt=""/>
                                        <Image src={Pipes} className="products--pipes__right__content__info__img"/>
                                        <div className="products--pipes__right__content__info__link">                                
                                            <a href="#"  target="_blank">Visit Website</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="products--industries__left__link products--more text--content products--pipes__left__link  d-md-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div> 

        </div>

    )
    // }
}

export default Products ;
