import React from 'react';
import { NavLink } from 'react-router-dom';
import LineIcon from 'react-lineicons';
import { Image } from 'react-bootstrap';
import logo from '../../img/Logo.png';

function Header (props) {


    function onClickShowMobileMenu() {
        let main_menu = document.getElementsByClassName('mobile--menu__left');
        for (let i=0; i<main_menu.length; i++) {
            main_menu.item(i).classList.add('mobile--menu__left__show');
            if(document.getElementsByClassName('hide--menu')){
                main_menu.item(i).classList.remove('hide--menu');
            }
        }
    
        let menu = document.getElementsByClassName('mobile--menu__left__show__main');
    
        
        for (let i=0; i<menu.length; i++) {
            menu.item(i).classList.add('show--menu');
        }
    
        let overlay = document.getElementsByClassName('mobile--menu__left__show__overlay');
    
        for (let i=0; i<overlay.length; i++) {
           overlay.item(i).classList.add('show--menu');
        }
    
        document.body.classList.add("overflow--hidden");
    }
    
    function onClickHideMobileMenu(){
        let main_menu = document.getElementsByClassName('mobile--menu__left');
    
        for (let i=0; i<main_menu.length; i++) {
            main_menu.item(i).classList.remove('mobile--menu__left__show');
        }
    
        
        let menu = document.getElementsByClassName('mobile--menu__left__show__main');
    
        for (let i=0; i<menu.length; i++) {
            menu.item(i).classList.remove('show--menu');
        }
    
        let overlay = document.getElementsByClassName('mobile--menu__left__show__overlay');
    
        for (let i=0; i<overlay.length; i++) {
            overlay.item(i).classList.remove('show--menu');
        }
        document.body.classList.remove("overflow--hidden");
    }
    onClickShowMobileMenu()
    onClickHideMobileMenu()

    return (
        <div>

            <header className="header">
                    <div className="container container--max">
                        <div className="row">
                            <nav className="navbar navbar-expand-md navbar-light bg-light header__menu">
                                
                                    <NavLink to="/" className = "navbar-brand" exact>
                                        <Image src={logo}  alt="logo"/>
                                    </NavLink>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink to="/" activeClassName='active' className = "nav-link" exact>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/about" activeClassName='active' className = "nav-link">About Tahweel</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/products" activeClassName='active' className = "nav-link">Products</NavLink>
                                        
                                        </li>    
                                        <li className="nav-item">
                                            <NavLink to="/media" activeClassName='active' className = "nav-link">Media Center</NavLink>
                                        </li>   
                                        <li className="nav-item">
                                            <NavLink to="/contact" activeClassName='active' className = "nav-link">Contact Us</NavLink>
                                        </li>   
                                    </ul>
                                    </div>  
                                
                            </nav>
                        </div>
                </div>
            </header>

            <header className="mobile--menu">
                <div className="container container--max">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div  className="mobile--menu__main">
                                <a href="index.html">                                    
                                    <Image src={logo} className="mobile--menu__main__img"  alt="logo"/>
                                </a>
                                <div className="mobile--menu__main__toggler"  onClick={onClickShowMobileMenu}><LineIcon name="menu" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile--menu__left hide--menu">
                    <div className="mobile--menu__left__main  mobile--menu__left__show__main">
                        <div className="mobile--menu__left__main__menu">       
                            <Image src={logo} className="mobile--menu__left__main__menu__img"  alt="logo"/>             
                            <ul className="mobile--menu__left__main__menu__navbar">
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" exact onClick={onClickHideMobileMenu}>Home</NavLink>
                                </li>
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/about" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" onClick={onClickHideMobileMenu}>About Tahweel</NavLink>
                                </li>
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/products" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" onClick={onClickHideMobileMenu}>Products</NavLink>
                                </li>    
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/media" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" onClick={onClickHideMobileMenu}>Media Center</NavLink>
                                </li>   
                                <li className="mobile--menu__left__main__menu__navbar__item">
                                    <NavLink to="/contact" activeClassName='active' className = "mobile--menu__left__main__menu__navbar__item__link" onClick={onClickHideMobileMenu}>Contact Us</NavLink>
                                </li>   
                            </ul>
                        </div>
                        
                        <div className="mobile--menu__left__main__hide"   onClick={onClickHideMobileMenu}><LineIcon name="close" />{/*<i className="lni lni-close"></i>*/}</div>
                    </div>

                    <div className="mobile--menu__left__overlay  mobile--menu__left__show__overlay" onClick={onClickHideMobileMenu}>

                    </div>
                </div>

            </header>
    </div>
    )
    
}

export default Header ;