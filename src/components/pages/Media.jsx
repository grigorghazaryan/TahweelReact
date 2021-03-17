import React, {Component, useState} from 'react';
import { Image, Collapse } from 'react-bootstrap';
import Image02 from '../../img/Media/Image02.jpg';
import Image01 from '../../img/Media/image.jpg';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";
import constants from "../../helpers/constants";

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


class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: [],
            media: [],
            open: false,
            isLoaded: false,
            openedItem: null
        }


        // eslint-disable-next-line react-hooks/rules-of-hooks
        AOS.init({
            once: true
        });
        document.addEventListener('scroll', function (e) {
            AOS.init({
                once: true,
            });
        });
        this.settings = {
            dots: false,
            infinite: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
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
        this.url = `${constants.urls.API}/getMedia`;
    }
    componentDidMount() {

        fetch(this.url, {
            method: `GET`
        }).then( res =>{
            return res.json()
        })
            .then( result =>{

                this.setState({
                    isLoaded: true,
                    media: result.media,

                })
            })
            .catch( err =>{
                console.log(err);
            })
    }
    render() {
        //console.log( this.state.media )

        const settings = this.settings;
        const media = this.state.media.map(( item, i ) => (
            <div key={1}>
                {/* <div  data-toggle="collapse" data-target="#mediaInfo" aria-expanded="false" aria-controls="mediaInfo" className="media--slider__slide"> */}
                <div onClick={() => this.setState({
                                                            open: !this.state.open,
                                                            openedItem: this.state.openedItem === null ? item : null
                                                        })}
                     aria-controls="example-collapse-text"
                     aria-expanded={this.state.open}>
                    <div className="media--slider__slide__info" >
                        <Image src={constants.urls.UPLOAD +item.logo} className="media--slider__slide__info__img"/>
                        <div className="media--slider__slide__info__text slider--text">
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
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

        ))
        if (!this.state.isLoaded) {
            return <div className="loader">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
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


                            {media}

                        </Slider>
                        {/* </div> */}
                    </div>

                </div>

                <div className="col-md-12 col-sm-12">
                    {/* <div className="collapse" id="mediaInfo"> */}
                           <Collapse in={this.state.open}>
                           <div className="media--slider__bottom__info">

                                <div className="row">
                                    <div className="col-md-9">
                                        <h2 className="media--slider__bottom__info__title">
                                            { this.state.openedItem ? this.state.openedItem.details_title : `` }
                                        </h2>
                                    </div>
                                    <div className="col-md-3">
                                        <p  className="media--slider__bottom__info__date">
                                            { this.state.openedItem ? this.state.openedItem.date : `` }
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="media--slider__bottom__info__text">
                                               { this.state.openedItem ? this.state.openedItem.details_description : `` }
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
}}

export default Media ;
