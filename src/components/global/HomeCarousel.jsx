import {Component, React, useState} from 'react';
import { Image, Carousel } from 'react-bootstrap';
import slideImg1 from '../../img/home-slider/Untitled-3.jpg';
import slideImg2 from '../../img/home-slider/Untitled-1.jpg';
import slideImg3 from '../../img/home-slider/Untitled-2.jpg';
import slideImg4 from '../../img/home-slider/Untitled-4.jpg';
import {NavLink} from "react-router-dom";
import constants from "./../../helpers/constants";

class HomeCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliders: props.sliders || []
        }

    }

    render() {
        //console.log(this.state.sliders);
        const sliders = this.props.sliders.map((item, i) => (

            <Carousel.Item key={i} className="slide-1">
                <Image src={constants.urls.UPLOAD + item.path} className="d-block w-100 banner__img" alt="slide"/>
                <Carousel.Caption>
                    <div className="container container--max">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-12">
                                <div className="banner__text">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                                <div className="banner__link">
                                    {/*item.category.pdf_path?*/}
                                    <a href={constants.urls.UPLOAD+item.category.pdf_path}>VIEW CATALOGUE</a>
                                    <a href={item.category.link}>LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        ))
        return (
            <Carousel
                slide={true}
                fade={true}
                className=" banner "
                nextIcon={<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down"
                               fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>}
                prevIcon={<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down"
                               fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>}
                indicators={false}>
                {sliders}
            </Carousel>
        )
    }
}
export default HomeCarousel ;