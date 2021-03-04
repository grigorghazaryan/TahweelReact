import { React, useState, setStatus } from 'react';
import { Image, Tab, Tabs, Collapse } from 'react-bootstrap';
import Handroll from '../../img/Product-category/IndustrialSolutions/222Handroll.jpg';
import img1 from '../../img/Product-category/IndustrialSolutions/111.jpg';
import img2 from '../../img/Product-category/IndustrialSolutions/333.jpg';
import img3 from '../../img/Product-category/IndustrialSolutions/4444.jpg';
import img4 from '../../img/Product-category/IndustrialSolutions/5555.jpg';
import arrowUp from '../../img/Product-category/arrow-up.svg';
import arrowDown from '../../img/Product-category/arrow-down.svg';
import image from '../../img/Product-category/AvialablePossibilities.png';
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

function Industrial(props){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    // find out if tab is open or closed
    const [status1, setStatus1] = useState('open--tab');
    const onEntered1 = () => setStatus1('close--tab');  
    const onExited1 = () => setStatus1('open--tab');

    const [status2, setStatus2] = useState('open--tab');
    const onEntered2 = () => setStatus2('close--tab');  
    const onExited2 = () => setStatus2('open--tab');
    /* scroll animation start */
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
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
    };

    return (
        <div className="products--category overflow--hidden">
            
            <div className="products--category__main">
                <div data-aos="fade-right" data-aos-duration="1000">
                    <div className="container container--products single--products--slider overflow--hidden">
                        <div className="row">
                            <div className="col-md-10 col-12">                        
                                <h1 className=" page--title products--category__main__title">{`Industrial
                                `} 
                                                <span>Solutions</span></h1>
                                <hr className="products--category__main__line page--title__line" />
                                <p className="text--content products--category__main__text">
                                    All Range of industrial Solutions Film is offered as standard format and customized. Wide range of mechanical properties of the film and colours are available, for the best performance on different applications, where the film features will be fit on custom packaging lines, and thus achieve greater efficiency on saving the time and costs, which is our main objective.
                                </p>

                                <div className="products--category__main__item d-none">
                                        <div>
                                            <div className="products--category__main__slider__content active">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={Handroll}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Stretch</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img1}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Shrink Hood</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img2}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Shrink Hood</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img3}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Cover</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <Slider {...settings} className="products--category__main__slider products--category__main__slider--industrial" >
                                        <div>
                                            <div className="products--category__main__slider__content active">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={Handroll}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Stretch</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img1}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Shrink Hood</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img2}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Shrink Hood</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img3}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Cover</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="products--category__main__slider__content ">
                                                <div>
                                                    <div className="products--category__main__slider__content__img ">
                                                        
                                                        <Image src={img4}/>
                                                    </div>
                                                    <p  className="products--category__main__slider__content__title text--content">Construction Sheet</p>
                                                </div>
                                            </div>
                                        </div>


                                        
                                    </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="products--category__info">
                <div data-aos="fade-left" data-aos-duration="1000">
                    <div className="container container--products  overflow--hidden">
                        <div className="row">
                            <div className="col-md-10 col-12">

                                {/* title start  */}
                                <h2 className="products--category__info__title">Stretch</h2>
                                {/* title end */}

                                {/* tab start */}
                                <div className="products--category__info__tab">
                                    <Tabs id="controlled-tab-example">
                                        <Tab eventKey="handroll" title="Handroll">
                                            <div className="products--category__info__tab__text">
                                                <p className="products--category__info__tab__text__p">
                                                    {`Variety from 1kg, on different film width (400mm, 450mm and 500mm). 

                                                    Different core options (38mm, 50mm or 76mm ID) flush core or extended.`}
                                                </p>
                                                
                                            </div>
                                            
                                        </Tab>
                                        <Tab eventKey="machineroll" title="Machineroll">
                                            <div className="products--category__info__tab__text">
                                                <p className="products--category__info__tab__text__p">
                                                    {`Regular 16kg size but also weight or length up on customer requirement. 

                                                    With a 76mm core, 400mm, 450mm, 500mm, 1000mm and 1500mm film width are available and combinations of those sizes and different core weight as well.`}
                                                </p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="jumboroll" title="Jumboroll">
                                            <div className="products--category__info__tab__text">
                                                <p className="products--category__info__tab__text__p">
                                                    {`Most common sizes are 50kg and 60kg, but can be customized based on customer requirement. 

                                                    With a 76mm core, 400mm, 450mm and 500m film width are available and combinations of those sizes and different core weight as well.`}
                                                </p>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                                {/* tab end */}

                                {/* collapse title */}

                                <p className="products--category__info__collapse--title">Within those Industrial solutions, here are the main product categories for the stretch division:</p>
                                {/* collapse title end*/}

                                {/* collapse start*/}
                                <div className="products--category__info__collapse--content">
                                    <div className="products--category__info__collapse--content__button"
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="example-collapse-text1"
                                    aria-expanded={open1}>
                                        <p className={status1}> 
                                            <Image src={arrowUp} className="products--category__info__collapse--content__button__text__image--open"/> 
                                            <Image src={arrowDown} className="products--category__info__collapse--content__button__text__image--close"/> 
                                        <span>Transparent film</span></p>
                                        
                                    </div>

                                    <Collapse in={open1}
                                    onExited={onExited1}
                                    onEntered={onEntered1}>
                                        <div className="products--category__info__collapse--content__info example-collapse-text1">
                                            <ul>
                                                <li><span>Available from 15-120 mic as per customer requirement.</span></li>
                                                <li><span>Flat or Semitube option, opened from one side.</span></li>
                                                <li><span>Max winding width of 2.25m.</span></li>
                                                <li><span>Max total width semitube folded without gussets 4.5m.</span></li>
                                                <li><span>Max roll diameter 1m.</span></li>
                                                <li><span>Microperforation/macroperforation option.</span></li>
                                                <li><span>UV or antifog additive option under request.</span></li>
                                                <li><span>Supplied with PPR Core preventing core collapsing due to moisture.</span></li>
                                                <li><span>Refer to the TDS for more details of the film performance. Black Opaque film / Bicolor film</span></li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>

                                <div className="products--category__info__collapse--content">
                                    <div className="products--category__info__collapse--content__button"
                                    onClick={() => setOpen2(!open2)}
                                    aria-controls="example-collapse-text2"
                                    aria-expanded={open2}>
                                        <p className={status2}> 
                                        <Image src={arrowUp} className="products--category__info__collapse--content__button__text__image--open"/> 
                                        <Image src={arrowDown} className="products--category__info__collapse--content__button__text__image--close"/> 
                                        <span>Black Opaque film / Bicolor film</span></p>
                                        
                                    </div>

                                    <Collapse in={open2}
                                    onExited={onExited2}
                                    onEntered={onEntered2}>
                                        <div className="products--category__info__collapse--content__info example-collapse-text2">
                                            <ul>
                                                <li><span>Available from 15-120 mic as per customer requirement.</span></li>
                                                <li><span>Flat or Semitube option, opened from one side.</span></li>
                                                <li><span>Max winding width of 2.25m.</span></li>
                                                <li><span>Max total width semitube folded without gussets 4.5m.</span></li>
                                                <li><span>Max roll diameter 1m.</span></li>
                                                <li><span>Microperforation/macroperforation option.</span></li>
                                                <li><span>UV or antifog additive option under request.</span></li>
                                                <li><span>Supplied with PPR Core preventing core collapsing due to moisture.</span></li>
                                                <li><span>Refer to the TDS for more details of the film performance. Black Opaque film / Bicolor film</span></li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>
                                {/* collapse end*/}
                                
                                {/* list start*/}

                                <div className="products--category__info__list">
                                    <ul>
                                        <li><span>Available on different thickness and width as per customer requirement.</span></li>
                                        <li><span>Customized film properties for different applications.</span></li>
                                        <li><span>Max winding width of 2.25m.</span></li>
                                        <li><span>Max roll diameter 1m.</span></li>
                                        <li><span>3 inch and 6 inch core available.</span></li>
                                        <li><span>Corona treatment option.</span></li>
                                        <li><span>Slip and antiblock additive option under request.</span></li>
                                        <li><span>Refer to the TDS for more details of the film performance.</span></li>
                                    </ul>
                                </div>

                                {/* list end*/}

                                {/* image title start*/}
                                <p className="products--category__info__image--title">Available for roll configuration</p>
                                {/* image title end*/}
                                <div className="products--category__info__image--content">
                                    <Image src={image}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        )

    
}

export default Industrial ;