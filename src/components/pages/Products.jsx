import React from 'react';
import { NavLink } from 'react-router-dom';



import AOS from 'aos';
import 'aos/dist/aos.css';



function Products(props){
    AOS.init({
        once : true
    });
    document.addEventListener('scroll', function(e) {
        AOS.init({
            once : true,
        });
    });

    return(
        <div className="products--page overflow--hidden">
            <div className="container container--medium products--page__categories">
                
                <div className="row">
                    <div className="col-lg-6 col-12 products--page__categories__col">
                        
                        <div className="products--page__categories__content products--page__categories__content--industries">
                            <div data-aos="fade-right" data-aos-duration="1000" className="full--height">
                                <NavLink to="/industrial" exact>
                                    <h1 className=" page--title products--page__categories__content__title">Industrial 
                                        <span> Solutions</span></h1>
                                    <hr className="page--title__line products--page__categories__content--industries__line" />
                                    <p className="text--content products--page__categories__content__text">All Range of industrial Solutions Film is offered as standard format and customized. Wide range of mechanical properties of the film and colours are available, for the best performance on different applications, where the film features will be fit on custom packaging lines, and thus achieve greater efficiency on saving the time and costs, which is our main objective.</p>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 products--page__categories__col">
                        
                        <div className="products--page__categories__content products--page__categories__content--packaging">
                            <div data-aos="fade-left" data-aos-duration="1000" className="full--height">
                                <NavLink to="/packaging" exact>
                                    <h1 className=" page--title products--page__categories__content__title">Packaging 
                                        <span> Solutions</span></h1>
                                    <hr className="page--title__line products--page__categories__content--packaging__line" />
                                    <p className="text--content products--page__categories__content__text">The packaging solution product category arises from a solid foundation of performance and results. We offer cutting-edge packaging consumables and a wide range of colours and mechanical properties of the film to meet the needs of our customers.</p>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 products--page__categories__col">
                        <div className="products--page__categories__content products--page__categories__content--agriculture">
                            <div data-aos="fade-right" data-aos-duration="1000" className="full--height">
                                <NavLink to="/agriculture" exact>
                                    <h1 className=" page--title products--page__categories__content__title">Agriculture</h1>
                                    <hr className="page--title__line products--page__categories__content--agriculture__line" />
                                    <p className="text--content products--page__categories__content__text">To ensure and significantly increase the yield while improving the quality of the crop, our Agriculture Solutions offer a wide range of applications that encompass the market major categories on sizes, specifications and different end use.</p>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12 products--page__categories__col">
                        <div className="products--page__categories__content products--page__categories__content--pipes">
                            <div data-aos="fade-left" data-aos-duration="1000" className="full--height">
                                <NavLink to="/" exact>
                                    <h1 className=" page--title products--page__categories__content__title">Pipes 
                                    <span> & Fittings</span></h1>
                                    <hr className="page--title__line products--page__categories__content--pipes__line" />
                                    <p className="text--content products--page__categories__content__text">To ensure and signifcantly increase the yield while improving the quality of the crop, our Agriculture Solutions offer a wide range of applications that encompass the market major categories on sizes, specifcations and different end use.</p>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
          

        </div>

    )
    // }
}

export default Products ;
