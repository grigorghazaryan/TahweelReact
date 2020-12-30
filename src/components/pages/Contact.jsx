import React from 'react';
import { Image } from 'react-bootstrap';
import Group27 from '../../img/contact/Group27.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(props) {
    AOS.init({
        once : true
    });
    document.addEventListener('scroll', function(e) {
        AOS.init({
            once : true,
        });
    });
    return(
        <div className="contact overflow--hidden">
            <div className="contact__info">
                <div className="container container--medium">
                
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-6 contact__info__left">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <div className="contact__info__left__content">
                                    <h1 className=" page--title contact__info__left__content__title"><span>Careers</span></h1>
                                    <hr className="page--title__line contact__info__left__content__line" />
                                    <p className="contact__info__left__content__text">Tahweel offers qualified, ambitious and ethical people the opportunity to work in a very empowering environment. We are looking for people who can share our values, motivated enough to grow professionally and naturally gifted to cooperate and help us achieve our common objectives.</p>
                                </div>
                            </div>                        
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-6 contact__info__right">
                            <div data-aos="fade-left" data-aos-duration="1000">                        
                                <div className="contact__info__right__content">
                                    <Image src={Group27} className="contact__info__right__content__img"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            <div className="contact__directory">
                <div className="container container--medium">
                
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-lg-8 contact__directory__top">
                            <div data-aos="fade-right" data-aos-duration="1000">

                                <div className="contact__directory__top__content">
                                    <h1 className=" page--title contact__directory__top__content__title">Contact 
                                        <span>Directory</span></h1>
                                    <hr className="page--title__line contact__directory__top__content__line" />
                                    <p className="contact__directory__top__content__text">Tahweel would be pleased to answer your questions, enquiries and takes your suggestions seriously and thanks you for your time and concern.</p>
                                </div>
                                <div className="row contact__directory__bottom">
                                    <div className="col-xs-12 col-md-6 col-lg-6">
                                        <a href="https://goo.gl/maps/pZMPvGqiJWNSm2Di9" target="_blank" className="contact__directory__bottom__link" rel="noreferrer">Jeddah 6587-23322 
                                            Kingdom Of Saudi Arabia</a>
                                        <p className="contact__directory__bottom__phone">+966126576336 
                                            +966126576336 - EXT 102 
                                            <span>P.O Box:2941</span></p>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-6">
                                        <a href="https://goo.gl/maps/1cfK8kikCTq1baraA" target="_blank" className="contact__directory__bottom__link" rel="noreferrer" >Rabigh Factory 
                                            Kingdom Of Saudi Arabia</a>
                                        <p className="contact__directory__bottom__phone">+966122238000 
                                            +966122238000- EXT 8090</p>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            <div className="contact__job">
                <div className="container container--medium">
                
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-lg-12 ">
                            
                                    <form  className="contact__job__form">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6 col-lg-6">
                                                <div data-aos="fade-right" data-aos-duration="1000">

                                                    <div className="form-group row">
                                                        <label htmlFor="name" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Name <span>*</span> </label>
                                                        <div className="col-sm-8">
                                                            <input id="name" type="text"  className="form-control contact__job__form__input" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="job" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Job Title </label>
                                                        <div className="col-sm-8">
                                                            <input id="job" type="text"  className="form-control contact__job__form__input" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="company" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Company</label>
                                                        <div className="col-sm-8">
                                                            <input id="company" type="text"  className="form-control contact__job__form__input" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="mobile" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Mobile <span>*</span> </label>
                                                        <div className="col-sm-8">
                                                            <input id="mobile" type="text"  className="form-control contact__job__form__input" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="email" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Email <span>*</span> </label>
                                                        <div className="col-sm-8">
                                                            <input id="email" type="email"  className="form-control contact__job__form__input" />
                                                        </div>
                                                    </div>

                                                </div>
                                                
                                                
                                            </div>
                                            <div className="col-xs-12 col-md-6 col-lg-6">
                                                <div data-aos="fade-left" data-aos-duration="1000">
                                                
                                                    <div className="form-group row">
                                                        <label htmlFor="subject" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Subject <span>*</span> </label>
                                                        <div className="col-sm-8">
                                                            <input id="subject" type="text"  className="form-control contact__job__form__input" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="message" className="col-sm-2 contact__job__form__label col-form-label form-control-plaintext">Message <span>*</span> </label>
                                                        <div className="col-sm-8">
                                                            
                                                            <textarea name="message" id="message" cols="30" rows="11" className="form-control contact__job__form__input contact__job__form__textarea"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-8 offset-sm-2 contact__job__form__submit">
                                                            <button  className="contact__job__form__submit__button">Submit</button>
                                                        </div>
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                            
                        </div>

                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Contact ;