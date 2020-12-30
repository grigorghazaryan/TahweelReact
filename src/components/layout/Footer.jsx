import React from 'react';
import { Image } from 'react-bootstrap';
import filmLogo from '../../img/logo/Tahweelfilm.svg';
import applogoEngLogo from '../../img/logo/Tahweelapplogo-Eng.svg';
import argicultureLogo from '../../img/logo/Tahweelargiculture.svg';
import { NavLink } from 'react-router-dom';
import LineIcon from 'react-lineicons';


function Footer (props) {
    return (
        <div className = "footer">
            
      
            <div className="container container--medium">

                <div className="row footer__logo">
                    
                    
                    <div className="col-md-4 col-xs-12 footer__logo__col">
                        <a href="#" className="footer__logo__col__link">
                            <Image src={filmLogo} className="about-img" alt="logo"/>
                        </a>
                    </div>
                    <div className="col-md-4 col-xs-12 footer__logo__col">
                        <a href="#" className="footer__logo__col__link">
                            <Image src={applogoEngLogo} className="about-img" alt="logo"/>

                        </a>
                    </div>
                    <div className="col-md-4 col-xs-12 footer__logo__col">
                        <a href="#" className="footer__logo__col__link">
                            <Image src={argicultureLogo} className="about-img" alt="logo"/>
                        </a>
                    </div>
                    

                </div>
            </div>

            <footer className="footer">
                <div className="container container--max">
                    <div className="row">			
                        <div className="col-xs-12 col-md-4">
                            <div className="footer__left">
                                <h4 className="footer__left__title">Contact Us</h4>
                                <p className="footer__left__text">Our professional team is ready to guide you with our latest products, news, and special offers.</p>
                                <form  className="footer__left__form">
                                    <input type="text"  className="footer__left__form__input" placeholder="Email Address"/>
                                    <button  className="footer__left__form__submit">Send</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3 offset-md-1">
                            <div className="footer__center">
                                <div className="footer__center__menu">
                                    <ul>
                                            
                                        <li><NavLink to="/" exact>Home</NavLink></li>
                                        <li><NavLink to="/about">About Tahweel</NavLink></li>
                                        <li><NavLink to="/products">Products</NavLink></li>
                                        <li><NavLink to="/media">Media Center</NavLink></li>
                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="footer__right">
                                <div className="footer__right__social--icon">
                                    <a href="#" target="_blank"><LineIcon name="facebook-filled" /></a>
                                    <a href="#" target="_blank"><LineIcon name="twitter-original" /></a>
                                    <a href="#" target="_blank"><LineIcon name="youtube" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__copyright">
                    <div className="container container--max">
                        <div className="row">			
                            <div className="col-xs-12 col-md-6">
                                <ul className="footer__copyright__menu">
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <p className="footer__copyright__text">© 2020 Tahweel Integrated. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
    
}

export default Footer ;